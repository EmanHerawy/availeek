# Availeek

AvailDA on the edge using fleek function.
What is inside:

- Retrieve blockchain transaction data from AvailDA on the edge by utilizing Fleek function.
  Enabling user to retrieve blockchain transaction data from AvailDA on the edge by utilizing Fleek function.
  The POC should replace the retrieval role in in DA layre to let user get transaction data from the DA layer directly.
- Data Attestation Bridge
  the current implementation could be extended to support avail data sampling and attestation that light client could use to verify the data integrity.

## Value Proposition

AVS on the Edge

By delegating some of the AVS tasks to Fleek Functions and leveraging the decentralized compute power of the Fleek network, we can enhance the efficiency and flexibility of AVS. Specifically, this involves using Fleek Functions to retrieve data from the DA layer in AvailDA and performing data sampling tasks traditionally handled by Avail light clients. This approach enables AvailDA light clients to run from any edge device, offering greater scalability and accessibility.

## How to use it

```bash
# to retrieve the block data from the avaiilDA
curl -X POST -H "Content-Type: application/json" -d '{"blockHash": "<blockhash>", "endpoint": "<repc endpoint>"}' https://availeek.functions.on-fleek.app   --output response.json


# AvailDA data attestation

 curl -X GET https://few-oil-low.functions.on-fleek.app?blockNumber=<blockNumber>&txIndex=<index_number>&asFinalized=<value>

```
