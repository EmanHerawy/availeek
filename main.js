

import { initialize } from "avail-js-sdk"

// the funciton is expecting some information about the transaction you want to retrieve from availDA
export const main = async(params) => {

    try {
      let result=[];
    const {txHash, blockHash,endpoint}= params.body; // we have to set either query or budy to ready paprameters
    const api = await initialize(endpoint);
    // Extracting data
    // console.log({api,txHash,blockHash});
    const block = await api.rpc.chain.getBlock(blockHash)
    // return all data in a gevin block 

    block.block.extrinsics.forEach((ex, index) => {
    
      const dataHex = ex.method.args.map((a) => a.toString()).join(", ")
      // Data retrieved from the extrinsic data
      let str = ""
      for (let n = 0; n < dataHex.length; n += 2) {
        str += String.fromCharCode(parseInt(dataHex.substring(n, n + 2), 16))
      }
      console.log(`submitted data: ${str}`)
      result.push (str);
    });


 return result;

   } catch (err) {
    console.error(err)
    return err;
  }

}