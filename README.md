# Human Standard Token ABI

A simple node module that exports the [Ethereum ABI][1] for [ERC 20][2] compatible tokens.

## Usage

``` javascript
var token = web3.eth.contract(HumanStandardToken.abi).at(contract_address)

// Get the token name
token.name.call({from: addr}, function(err, name) {
  if(err) { console.log(err) }
  if(name) { console.log(name) }
})

// Get the token symbol
token.symbol.call({from: addr}, function(err, symbol) {
  //ABI expects string here,
  if(err) { console.log(err) }
  console.log('Token symbol: ' + symbol)
})

token.totalSupply.call({from: addr}, function(err, totalSupply) {
  console.log(totalSupply)
})

```

[1]: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI
[2]: https://github.com/ethereum/EIPs/issues/20
