//artifacts represents the contract abstraction that is 
//specific to truffle and this will give us election artifacts 
//that reprsents our smart contract and truffle will expose this 
//so that interact with it in any case that we want to so in the 
//console when we write test or when we use fornt end application 

var Election = artifacts.require("./Election.sol");

//directive to deploy our contact with this function
module.exports = function(deployer) {
  deployer.deploy(Election);
};