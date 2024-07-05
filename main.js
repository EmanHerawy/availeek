/// The example showcases how to programmatically do data submission.
///
/// The following transactions are being called:
///   DataAvailability.submitData
///

import { initialize } from "avail-js-sdk"


export const main = async(params) => {
    try {
        const {txHash, blockHash,endpoint}= params.body; // we have to set either query or budy to ready paprameters
    const api = await initialize(endpoint);
    // Extracting data
    console.log({api,txHash,blockHash});
    const block = await api.rpc.chain.getBlock(blockHash)
    const tx = block.block.extrinsics.find((tx) => tx.hash.toHex() == txHash)
    if (tx == undefined) {
      console.log("Failed to find the Submit Data transaction")
       return "Failed to find the Submit Data transaction"
    }

    const dataHex = tx.method.args.map((a) => a.toString()).join(", ")
    // Data retrieved from the extrinsic data
    let str = ""
    for (let n = 0; n < dataHex.length; n += 2) {
      str += String.fromCharCode(parseInt(dataHex.substring(n, n + 2), 16))
    }
    console.log(`submitted data: ${str}`)
    return str;

   } catch (err) {
    console.error(err)
  }

}