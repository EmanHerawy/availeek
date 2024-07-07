import {ethers} from "ethers";

import ABI from './availbridge.json' with {type: "json"};

// const AVAIL_RPC = "wss://turing-rpc.avail.so/ws";
 const BRIDGE_ADDRESS = "0x967F7DdC4ec508462231849AE81eeaa68Ad01389"; // deployed bridge address
 const BRIDGE_API_URL = "https://turing-bridge-api.fra.avail.so"; // bridge api url
const ETH_PROVIDER_URL = "https://ethereum-sepolia.publicnode.com"; // eth provider url


/**
 * 
 * 
 curl -X GET https://few-oil-low.functions.on-fleek.app?blockNumber=435907&txIndex=1&asFinalized=true  

 curl -X GET -H "Content-Type: application/json" '{ blockNumber:435907, txIndex:1,asFinalized:true}' https://few-oil-low.functions.on-fleek.app
 * 
 */
 
 // return whether the blob is included in the bridge or not

export const main = async(params)=> {
    // const { blockNumber, txIndex,asFinalized} = params.body;
    const { blockNumber, txIndex,asFinalized} = params.query;

    let getHeadRsp = await fetch(BRIDGE_API_URL + "/avl/head");
    if (getHeadRsp.status != 200) {
        console.log("Something went wrong fetching the head.");
        return "Something went wrong fetching the head." ;
    }
    let headRsp = await getHeadRsp.json();
     let lastCommittedBlock= headRsp.data.end;
    if (lastCommittedBlock >= blockNumber) {
        console.log("Fetching the blob proof.")
        const proofResponse = await fetch(BRIDGE_API_URL + "/eth/proof/" + asFinalized + "?index=" + txIndex);
        if (proofResponse.status != 200) {
            console.log("Something went wrong fetching the proof.")
            console.log(proofResponse)
           return "Something went wrong fetching the proof.";
        }
        let proof = await proofResponse.json();
        console.log("Proof fetched:")
        console.log(proof);
        // call the deployed contract verification function with the inclusion proof.
        const provider = new ethers.providers.JsonRpcProvider(ETH_PROVIDER_URL);
        const contractInstance = new ethers.Contract(BRIDGE_ADDRESS, ABI, provider);
        const isVerified = await contractInstance.verifyBlobLeaf([
            proof.dataRootProof,
            proof.leafProof,
            proof.rangeHash,
            proof.dataRootIndex,
            proof.blobRoot,
            proof.bridgeRoot,
            proof.leaf,
            proof.leafIndex]
        );
        console.log(`Blob validation is: ${isVerified}`)
        return isVerified   
    }
    else {
        console.log("Block not yet committed.")
        return "Block not yet committed.";
    }
}
