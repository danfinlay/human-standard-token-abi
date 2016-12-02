var abi = require('../')
var contractAddress = '0xD8912C10681D8B21Fd3742244f44658dBA12264E' // Pluton mainnet address

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  startApp()
})


function startApp(){
  var token = web3.eth.contract(abi).at(contractAddress)
  var addr = web3.eth.accounts[0]

  window.token = token // try it out in your console!

  token.name.call({from: addr}, function(err, name) {
    if(err) { console.log(err) }
    if(name) { console.log(name) }
  })
}

