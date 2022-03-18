<!--
order: 3
-->

# Truffle: Deploying a Smart Contract

Learn how to deploy a simple Solidity-based smart contract to Majestic StarChain using the Truffle environment {synopsis}

[Truffle](https://www.trufflesuite.com/truffle) is a development framework for deploying and managing [Solidity](https://github.com/ethereum/solidity) smart contracts.

## Install Dependencies

First, install the latest Truffle version on your machine globally.

```bash
yarn install truffle -g
```

## Create Truffle Project

In this step we will create a simple counter contract. Feel free to skip this step if you already have your own compiled contract.

Create a new directory to host the contracts and initialize it:

```console
mkdir mjt-truffle
cd mjt-truffle
```

Initialize the Truffle suite with:

```bash
truffle init
```

Create `contracts/Counter.sol` containing the following contract:

```javascript
pragma solidity >=0.7.0 <0.9.0;

contract Counter {
  uint256 counter = 0;

  function add() public {
    counter++;
  }

  function subtract() public {
    counter--;
  }

  function getCounter() public view returns (uint256) {
    return counter;
  }
}
```

Compile the contract using the `compile` command:

```bash
truffle compile
```

Create `test/counter_test.js` containing the following tests in Javascript using [Mocha](https://mochajs.org/):

```javascript
const Counter = artifacts.require("Counter")

contract('Counter', accounts => {
  const from = accounts[0]
  let counter

  before(async() => {
    counter = await Counter.new()
  })

  it('should add', async() => {
    await counter.add()
    let count = await counter.getCounter()
    assert(count == 1, `count was ${count}`)
  })
})
```

## Truffle configuration

Open `truffle-config.js` and uncomment the `development` section in `networks`:

```javascript
    development: {
      host: "http://test.validator-1.majesticchain.io",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
```

This will allow your contract to connect to your Majestic StarChain local node.

## Deploy contract

In the Truffle terminal, migrate the contract using:

```bash
truffle migrate --network development
```
