<!--
order: 5
-->

# Events

`Event`s are objects that contain information about the execution of the application. They are
mainly used by service providers like block explorers and wallet to track the execution of various
messages and index transactions. {synopsis}

## Pre-requisite Readings

- [Cosmos SDK Events](https://docs.cosmos.network/master/core/events.html) {prereq}
- [Ethereum's PubSub JSON-RPC API](https://geth.ethereum.org/docs/rpc/pubsub) {prereq}

## Subscribing to Events

### SDK and Tendermint Events

It is possible to subscribe to `Events` via Tendermint's Websocket.
This is done by calling the `subscribe` RPC method via Websocket:

```json
{
  "jsonrpc": "2.0",
  "method": "subscribe",
  "id": "0",
  "params": {
    "query": "tm.event='eventCategory' AND eventType.eventAttribute='attributeValue'"
  }
}
```

The main `eventCategory` you can subscribe to are:

- `NewBlock`: Contains `events` triggered during `BeginBlock` and `EndBlock`.
- `Tx`: Contains `events` triggered during `DeliverTx` (i.e. transaction processing).
- `ValidatorSetUpdates`: Contains validator set updates for the block.

These events are triggered from the `state` package after a block is committed. You can get the full
list of `event` categories
[here](https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants).

The `type` and `attribute` value of the `query` allow you to filter the specific `event` you are
looking for. For example, a `MsgEthereumTx` transaction triggers an `event` of type `ethermint` and
has `sender` and `recipient` as `attributes`. Subscribing to this `event` would be done like so:

```json
{
  "jsonrpc": "2.0",
  "method": "subscribe",
  "id": "0",
  "params": {
    "query": "tm.event='Tx' AND ethereum.recipient='hexAddress'"
  }
}
```

where `hexAddress` is an Ethereum hex address (eg: `0x1122334455667788990011223344556677889900`).

### Ethereum JSON-RPC Events

Majestic StarChain also supports the Ethereum [JSON-RPC](https://eth.wiki/json-rpc/API) filters calls to
subscribe to [state logs](https://eth.wiki/json-rpc/API#eth_newfilter),
[blocks](https://eth.wiki/json-rpc/API#eth_newblockfilter) or [pending
transactions](https://eth.wiki/json-rpc/API#eth_newpendingtransactionfilter) changes.

Under the hood, it uses the Tendermint RPC client's event system to process subscriptions that are
then formatted to Ethereum-compatible events.

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545

{"jsonrpc":"2.0","id":1,"result":"0x3503de5f0c766c68f78a03a3b05036a5"}
```

Then you can check if the state changes with the [`eth_getFilterChanges`](https://eth.wiki/json-rpc/API#eth_getfilterchanges) call:

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x3503de5f0c766c68f78a03a3b05036a5"],"id":1}' -H "Content-Type: application/json" http://localhost:8545

{"jsonrpc":"2.0","id":1,"result":["0x7d44dceff05d5963b5bc81df7e9f79b27e777b0a03a6feca09f3447b99c6fa71","0x3961e4050c27ce0145d375255b3cb829a5b4e795ac475c05a219b3733723d376","0xd7a497f95167d63e6feca70f344d9f6e843d097b62729b8f43bdcd5febf142ab","0x55d80a4ba6ef54f2a8c0b99589d017b810ed13a1fda6a111e1b87725bc8ceb0e","0x9e8b92c17280dd05f2562af6eea3285181c562ebf41fc758527d4c30364bcbc4","0x7353a4b9d6b35c9eafeccaf9722dd293c46ae2ffd4093b2367165c3620a0c7c9","0x026d91bda61c8789c59632c349b38fd7e7557e6b598b94879654a644cfa75f30","0x73e3245d4ddc3bba48fa67633f9993c6e11728a36401fa1206437f8be94ef1d3"]}
```
