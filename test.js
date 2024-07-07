// import { main } from "./main.js";
import {main} from "./attestation.js"
// curl -X GET -H "Content-Type: application/json" -d '{"txHash": "0xf0356768d33d31a957fd68930274b6fbe5758aedfd543f65560219d90c69b458", "blockHash": "0x9d0e2b5a01074a38eafab80f7f97ee91a53cd0d369021fe19adc5eb57faa1ea9", "endpoint": "wss://turing-rpc.avail.so/ws"}' https://brief-umbrella-tall.functions.on-fleek.app

async function  test () {
// curl -X GET -H "Content-Type: application/json" -d '{"txHash": "sdsdfs", "blockHash": "sdfsf", "endpoint": "https://api.lightclient.turing.avail.so/v1/v1"}' https://teeny-wall-faint.functions.on-fleek.app
// const params={body:{"txHash": "0xf0356768d33d31a957fd68930274b6fbe5758aedfd543f65560219d90c69b458", "blockHash": "0x9d0e2b5a01074a38eafab80f7f97ee91a53cd0d369021fe19adc5eb57faa1ea9", "endpoint": "wss://turing-rpc.avail.so/ws"}}
// const params={body:{"txHash": "0x0e8d56284725ce5db51dfda442d4cc78eb45cdf5f3e477e04c81d6e66a03a16d", "blockHash": "1", "endpoint": "ws://127.0.0.1:8545/"}}
const params={query:{"blockNumber": "1", "txIndex": "7-1", "asFinalized": "true"}}
await main(params) 


}

test().then(() => console.log("done")).catch((e) => console.error(e))