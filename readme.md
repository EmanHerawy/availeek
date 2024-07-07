# Availeek
Enabling user to retrieve blockchain transaction data from AvailDA on the edge by utilizing Fleek function. 
The POC should  replace the retrieval role in in DA layre to let user get transaction data from the DA layer directly.

## How to use it

```bash
curl -X POST -H "Content-Type: application/json" -d '{"blockHash": "0x9d0e2b5a01074a38eafab80f7f97ee91a53cd0d369021fe19adc5eb57faa1ea9", "endpoint": "wss://turing-rpc.avail.so/ws"}' https://availeek.functions.on-fleek.app   --output response.json

```