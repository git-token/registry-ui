'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _ethereumjsTx = require('ethereumjs-tx');

var _ethereumjsTx2 = _interopRequireDefault(_ethereumjsTx);

var _RegistryWorker = require('gittoken-web-workers/dist/Registry.worker.js');

var _RegistryWorker2 = _interopRequireDefault(_RegistryWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* babel-plugin-inline-import 'gittoken-contracts/build/contracts/GitTokenRegistry.json' */var GitTokenRegistry = '{\n  "contract_name": "GitTokenRegistry",\n  "abi": [\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_token",\n          "type": "address"\n        },\n        {\n          "name": "_value",\n          "type": "uint256"\n        }\n      ],\n      "name": "requestToken",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_organization",\n          "type": "string"\n        },\n        {\n          "name": "_name",\n          "type": "string"\n        },\n        {\n          "name": "_symbol",\n          "type": "string"\n        },\n        {\n          "name": "_decimals",\n          "type": "uint256"\n        },\n        {\n          "name": "_admin",\n          "type": "address"\n        },\n        {\n          "name": "_username",\n          "type": "string"\n        }\n      ],\n      "name": "registerToken",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": true,\n      "type": "function"\n    },\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_organization",\n          "type": "string"\n        },\n        {\n          "name": "_username",\n          "type": "string"\n        },\n        {\n          "name": "_admin",\n          "type": "address"\n        }\n      ],\n      "name": "verifyOrginization",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": true,\n      "inputs": [\n        {\n          "name": "",\n          "type": "address"\n        }\n      ],\n      "name": "admin",\n      "outputs": [\n        {\n          "name": "",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_admin",\n          "type": "address"\n        }\n      ],\n      "name": "addAdmin",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": true,\n      "inputs": [\n        {\n          "name": "_organization",\n          "type": "string"\n        }\n      ],\n      "name": "getOrganizationToken",\n      "outputs": [\n        {\n          "name": "_token",\n          "type": "address"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_token",\n          "type": "address"\n        },\n        {\n          "name": "_contributor",\n          "type": "address"\n        },\n        {\n          "name": "_value",\n          "type": "uint256"\n        },\n        {\n          "name": "_requestId",\n          "type": "bytes32"\n        }\n      ],\n      "name": "redeemToken",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "constant": false,\n      "inputs": [\n        {\n          "name": "_token",\n          "type": "address"\n        }\n      ],\n      "name": "blacklist",\n      "outputs": [\n        {\n          "name": "success",\n          "type": "bool"\n        }\n      ],\n      "payable": false,\n      "type": "function"\n    },\n    {\n      "inputs": [\n        {\n          "name": "_signer",\n          "type": "address"\n        }\n      ],\n      "payable": false,\n      "type": "constructor"\n    },\n    {\n      "payable": false,\n      "type": "fallback"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "name": "_organization",\n          "type": "string"\n        },\n        {\n          "indexed": false,\n          "name": "_token",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_symbol",\n          "type": "string"\n        },\n        {\n          "indexed": false,\n          "name": "_registeredBy",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_date",\n          "type": "uint256"\n        }\n      ],\n      "name": "TokenRegistered",\n      "type": "event"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "name": "_token",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_contributor",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_value",\n          "type": "uint256"\n        },\n        {\n          "indexed": false,\n          "name": "_date",\n          "type": "uint256"\n        },\n        {\n          "indexed": false,\n          "name": "_expiration",\n          "type": "uint256"\n        },\n        {\n          "indexed": false,\n          "name": "_requestId",\n          "type": "bytes32"\n        }\n      ],\n      "name": "TokenRequested",\n      "type": "event"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "name": "_token",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_contributor",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_value",\n          "type": "uint256"\n        },\n        {\n          "indexed": false,\n          "name": "_date",\n          "type": "uint256"\n        },\n        {\n          "indexed": false,\n          "name": "_requestId",\n          "type": "bytes32"\n        }\n      ],\n      "name": "TokenRedeemed",\n      "type": "event"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "name": "_organization",\n          "type": "string"\n        },\n        {\n          "indexed": false,\n          "name": "_admin",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "name": "_username",\n          "type": "string"\n        }\n      ],\n      "name": "OrganizationVerified",\n      "type": "event"\n    }\n  ],\n  "unlinked_binary": "0x6060604052341561000f57600080fd5b604051602080611c82833981016040528080519150505b5b600160a060020a0333166000908152602081905260409020805460ff191660011790555b60408051908101604052600160a060020a0382168152660aa87bee538000602082015260018151600582018054600160a060020a031916600160a060020a0392909216919091179055602082015160069091015550600160a060020a0381166000908152602081905260409020805460ff191660011790555b505b611bad806100d56000396000f3006060604052361561008b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631c11fce2811461009e578063232b2f5a146100d45780633b6aca0a1461020657806363a846f8146102b857806370480275146102eb578063941589981461031e578063b252f54e1461038b578063f9f92be4146103ca575b341561009657600080fd5b5b600080fd5b005b34156100a957600080fd5b6100c0600160a060020a03600435166024356103fd565b604051901515815260200160405180910390f35b6100c060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496863596602080820135600160a060020a03169750919550606081019450604090810135860180830194503592508291601f8301819004810201905190810160405281815292919060208401838380828437509496506104f095505050505050565b604051901515815260200160405180910390f35b341561021157600080fd5b6100c060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284375094965050509235600160a060020a03169250610a39915050565b604051901515815260200160405180910390f35b34156102c357600080fd5b6100c0600160a060020a0360043516610c1b565b604051901515815260200160405180910390f35b34156102f657600080fd5b6100c0600160a060020a0360043516610c30565b604051901515815260200160405180910390f35b341561032957600080fd5b61036f60046024813581810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650610c8595505050505050565b604051600160a060020a03909116815260200160405180910390f35b341561039657600080fd5b6100c0600160a060020a0360043581169060243516604435606435610d00565b604051901515815260200160405180910390f35b34156103d557600080fd5b6100c0600160a060020a0360043516610e65565b604051901515815260200160405180910390f35b60008060004261d2f001915084338542856040516c01000000000000000000000000600160a060020a039687168102825294909516909302601485015260288401919091526048830152606882015260880160405190819003902060008181526005602052604090819020805460ff191660011790559091507f4ef23728531e8f8b1a42f2971729be2ca30207b1527165105fc11f5948da17e69086903390879042908790879051600160a060020a0396871681529490951660208501526040808501939093526060840191909152608083015260a082019290925260c001905180910390a1600192505b505092915050565b600080876003816040518082805190602001908083835b6020831061052757805182525b601f199092019160209182019101610507565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020600160a060020a0333166000908152602091909152604090205460ff16151560011461058657600080fd5b886002816040518082805190602001908083835b602083106105ba57805182525b601f19909201916020918201910161059a565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040519081900390205460ff16156105fc57600080fd5b89898989308a8a61060b610eba565b60608101859052600160a060020a038085166080830152831660a082015260e080825281906020820190604083019060c084019084018c818151815260200191508051906020019080838360005b838110156106725780820151818401525b602001610659565b50505050905090810190601f16801561069f5780820380516001836020036101000a031916815260200191505b5085810384528b818151815260200191508051906020019080838360005b838110156106d65780820151818401525b6020016106bd565b50505050905090810190601f1680156107035780820380516001836020036101000a031916815260200191505b5085810383528a818151815260200191508051906020019080838360005b8381101561073a5780820151818401525b602001610721565b50505050905090810190601f1680156107675780820380516001836020036101000a031916815260200191505b50858103825286818151815260200191508051906020019080838360005b8381101561079e5780820151818401525b602001610785565b50505050905090810190601f1680156107cb5780820380516001836020036101000a031916815260200191505b509b505050505050505050505050604051809103906000f08015156107ef57600080fd5b92508260018b6040518082805190602001908083835b6020831061082557805182525b601f199092019160209182019101610805565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055600160028b6040518082805190602001908083835b602083106108b957805182525b601f199092019160209182019101610899565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020805460ff19169115159190911790557f19aa338b869f56bd394eea65936a7a6b06c5290bf8418a428816e82e0660bf2a8a848a8942604051600160a060020a038086166020830152831660608201526080810182905260a080825281906040820190820188818151815260200191508051906020019080838360005b838110156109825780820151818401525b602001610969565b50505050905090810190601f1680156109af5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156109e65780820151818401525b6020016109cd565b50505050905090810190601f168015610a135780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a1600193505b5b505b50509695505050505050565b60065460009033600160a060020a03908116911614610a5757600080fd5b60016003856040518082805190602001908083835b60208310610a8c57805182525b601f199092019160209182019101610a6c565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600084600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507f3e740f4c6db1db1f5937f6fcc3d1c2a8c896d2e42bfe7677e8eca980e32b0ce2848385604051600160a060020a0383166020820152606080825281906040820190820186818151815260200191508051906020019080838360005b83811015610b6e5780820151818401525b602001610b55565b50505050905090810190601f168015610b9b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bd25780820151818401525b602001610bb9565b50505050905090810190601f168015610bff5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15060015b5b9392505050565b60006020819052908152604090205460ff1681565b600160a060020a03331660009081526020819052604081205460ff161515610c5757600080fd5b50600160a060020a0381166000908152602081905260409020805460ff191660019081179091555b5b919050565b60006001826040518082805190602001908083835b60208310610cba57805182525b601f199092019160209182019101610c9a565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405190819003902054600160a060020a031690505b919050565b600654600090819033600160a060020a03908116911614610d2057600080fd5b60008381526005602052604090205460ff161515610d3d57600080fd5b5084600160a060020a03811663ef6506db86866000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610db557600080fd5b6102c65a03f11515610dc657600080fd5b505050604051805190501515610ddb57600080fd5b60008381526005602052604090819020805460ff191690557f54d272e118ccd59c4fcb17f68e26a181a87fc99196602d466727270a7217868c908790879087904290889051600160a060020a0395861681529390941660208401526040808401929092526060830152608082019290925260a001905180910390a1600191505b5b50949350505050565b600160a060020a03331660009081526020819052604081205460ff161515610e8c57600080fd5b50600160a060020a0381166000908152600460205260409020805460ff191660019081179091555b5b919050565b604051610cb780610ecb8339019056006060604052341561000f57600080fd5b604051610cb7380380610cb78339810160405280805182019190602001805182019190602001805182019190602001805191906020018051919060200180519190602001805190910190505b60008055600184905560028680516100779291602001906100fc565b50600387805161008b9291602001906100fc565b50600485805161009f9291602001906100fc565b5060058054600160a060020a031916600160a060020a038581169190911790915582166000908152600760205260409020805460ff1916600117905560068180516100ee9291602001906100fc565b505b5050505050505061019c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013d57805160ff191683800117855561016a565b8280016001018555821561016a579182015b8281111561016a57825182559160200191906001019061014f565b5b5061017792915061017b565b5090565b61019991905b808211156101775760008155600101610181565b5090565b90565b610b0c806101ab6000396000f300606060405236156100b75763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100ca578063095ea7b31461015557806318160ddd1461018b57806323b872dd146101b057806323bd4d7a146101ec578063313ce5671461027757806370a082311461029c57806373d4a13a146102cd57806395d89b41146104f9578063a9059cbb14610584578063dd62ed3e146105ba578063ef6506db146105f1575b34156100c257600080fd5b5b600080fd5b005b34156100d557600080fd5b6100dd610627565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561011a5780820151818401525b602001610101565b50505050905090810190601f1680156101475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016057600080fd5b610177600160a060020a03600435166024356106cf565b604051901515815260200160405180910390f35b341561019657600080fd5b61019e610789565b60405190815260200160405180910390f35b34156101bb57600080fd5b610177600160a060020a0360043581169060243516604435610790565b604051901515815260200160405180910390f35b34156101f757600080fd5b6100dd6107f6565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561011a5780820151818401525b602001610101565b50505050905090810190601f1680156101475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561028257600080fd5b61019e6108a0565b60405190815260200160405180910390f35b34156102a757600080fd5b61019e600160a060020a03600435166108a7565b60405190815260200160405180910390f35b34156102d857600080fd5b6102e06108c6565b60405187815260208101879052600160a060020a03831660a082015260e060408201818152875460026001821615610100908102600019019092160492840183905290916060840191608085019160c08601918601908b9080156103855780601f1061035a57610100808354040283529160200191610385565b820191906000526020600020905b81548152906001019060200180831161036857829003601f168201915b505085810384528954600260001961010060018416150201909116048082526020909101908a9080156103f95780601f106103ce576101008083540402835291602001916103f9565b820191906000526020600020905b8154815290600101906020018083116103dc57829003601f168201915b505085810383528854600260001961010060018416150201909116048082526020909101908990801561046d5780601f106104425761010080835404028352916020019161046d565b820191906000526020600020905b81548152906001019060200180831161045057829003601f168201915b50508581038252865460026000196101006001841615020190911604808252602090910190879080156104e15780601f106104b6576101008083540402835291602001916104e1565b820191906000526020600020905b8154815290600101906020018083116104c457829003601f168201915b50509b50505050505050505050505060405180910390f35b341561050457600080fd5b6100dd6108e6565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561011a5780820151818401525b602001610101565b50505050905090810190601f1680156101475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561058f57600080fd5b610177600160a060020a0360043516602435610990565b604051901515815260200160405180910390f35b34156105c557600080fd5b61019e600160a060020a03600435811690602435166109e3565b60405190815260200160405180910390f35b34156105fc57600080fd5b610177600160a060020a0360043516602435610a10565b604051901515815260200160405180910390f35b61062f610ace565b6002805460001961010060018316150201168190046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505090505b90565b60006002366044146106e057600080fd5b821580156107115750600160a060020a03338116600090815260086020908152604080832093881683529290522054155b151561071c57600080fd5b600160a060020a03338116600081815260086020908152604080832094891680845294909152908190208690557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259086905190815260200160405180910390a3600191505b5b5092915050565b6000545b90565b60006003366064146107a157600080fd5b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405190815260200160405180910390a3600191505b5b509392505050565b6107fe610ace565b60038054600260001961010060018416150201909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505090505b90565b6001545b90565b600160a060020a0381166000908152600960205260409020545b919050565b600054600154600554600290600390600490600160a060020a0316600687565b6108ee610ace565b60048054600260001961010060018416150201909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505090505b90565b600082600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600860209081526040808320938516835292905220545b92915050565b60055460009033600160a060020a03908116911614610a2e57600080fd5b600160a060020a038316600090815260096020526040902054610a57908363ffffffff610ab416565b50600054610a6b908363ffffffff610ab416565b5082600160a060020a03167f9c9e0cdb1670e88302408e5b941dc636f63a3293204694bb68910fcf3d9305f38360405190815260200160405180910390a25060015b5b92915050565b600082820183811015610ac357fe5b8091505b5092915050565b602060405190810160405260008152905600a165627a7a72305820f9b4fbbe828141a2ceb31341b81c3ea6291170d7f530e463fde11d44221441710029a165627a7a723058200b761a1f7e844924f37fc0f49c087ed8ec00b6fee38e13bfd3a8b4204e4eb0db0029",\n  "networks": {\n    "9": {\n      "events": {\n        "0x19aa338b869f56bd394eea65936a7a6b06c5290bf8418a428816e82e0660bf2a": {\n          "anonymous": false,\n          "inputs": [\n            {\n              "indexed": false,\n              "name": "_organization",\n              "type": "string"\n            },\n            {\n              "indexed": false,\n              "name": "_token",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_symbol",\n              "type": "string"\n            },\n            {\n              "indexed": false,\n              "name": "_registeredBy",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_date",\n              "type": "uint256"\n            }\n          ],\n          "name": "TokenRegistered",\n          "type": "event"\n        },\n        "0x4ef23728531e8f8b1a42f2971729be2ca30207b1527165105fc11f5948da17e6": {\n          "anonymous": false,\n          "inputs": [\n            {\n              "indexed": false,\n              "name": "_token",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_contributor",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_value",\n              "type": "uint256"\n            },\n            {\n              "indexed": false,\n              "name": "_date",\n              "type": "uint256"\n            },\n            {\n              "indexed": false,\n              "name": "_expiration",\n              "type": "uint256"\n            },\n            {\n              "indexed": false,\n              "name": "_requestId",\n              "type": "bytes32"\n            }\n          ],\n          "name": "TokenRequested",\n          "type": "event"\n        },\n        "0x54d272e118ccd59c4fcb17f68e26a181a87fc99196602d466727270a7217868c": {\n          "anonymous": false,\n          "inputs": [\n            {\n              "indexed": false,\n              "name": "_token",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_contributor",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_value",\n              "type": "uint256"\n            },\n            {\n              "indexed": false,\n              "name": "_date",\n              "type": "uint256"\n            },\n            {\n              "indexed": false,\n              "name": "_requestId",\n              "type": "bytes32"\n            }\n          ],\n          "name": "TokenRedeemed",\n          "type": "event"\n        },\n        "0x3e740f4c6db1db1f5937f6fcc3d1c2a8c896d2e42bfe7677e8eca980e32b0ce2": {\n          "anonymous": false,\n          "inputs": [\n            {\n              "indexed": false,\n              "name": "_organization",\n              "type": "string"\n            },\n            {\n              "indexed": false,\n              "name": "_admin",\n              "type": "address"\n            },\n            {\n              "indexed": false,\n              "name": "_username",\n              "type": "string"\n            }\n          ],\n          "name": "OrganizationVerified",\n          "type": "event"\n        }\n      },\n      "links": {},\n      "address": "0x2afbc7652fde6fd014a4e75db6d383451c804f3a",\n      "updated_at": 1509658176184\n    }\n  },\n  "schema_version": "0.0.5",\n  "updated_at": 1509658176184\n}';

var _JSON$parse = JSON.parse(GitTokenRegistry),
    abi = _JSON$parse.abi,
    unlinked_binary = _JSON$parse.unlinked_binary,
    networks = _JSON$parse.networks;

var RegistryActions = function () {
  function RegistryActions(_ref) {
    var torvaldsNetwork = _ref.torvaldsNetwork,
        registryAddress = _ref.registryAddress,
        registryAPI = _ref.registryAPI;

    _classCallCheck(this, RegistryActions);

    // Torvalds Network
    this.torvalds = new _web2.default(new _web2.default.providers.HttpProvider(torvaldsNetwork));

    // Registry on the Main Ethereum Network
    this.registry = window.web3.eth.contract(abi).at(registryAddress);

    // Registry Http Service
    this.registryAPI = registryAPI;

    this.registryWorker = new _RegistryWorker2.default();
    this.registryWorker.addEventListener('message', function (msg) {
      console.log('Received Message from Worker', msg);
    });

    this.registryWorker.postMessage(JSON.stringify({
      event: 'configure',
      payload: { registryAPI: registryAPI }
    }));
  }

  /**
   * [registerToken description]
   * @param  {[type]} registry      [description]
   * @param  {[type]} organization  [description]
   * @param  {[type]} tokenName     [description]
   * @param  {[type]} adminAddress  [description]
   * @param  {[type]} adminUsername [description]
   * @param  {[type]} symbol        [description]
   * @param  {[type]} decimals      [description]
   * @return {[type]}               [description]
   */


  _createClass(RegistryActions, [{
    key: 'registerToken',
    value: function registerToken(_ref2) {
      var _this = this;

      var authToken = _ref2.authToken,
          organization = _ref2.organization,
          tokenName = _ref2.tokenName,
          adminAddress = _ref2.adminAddress,
          adminUsername = _ref2.adminUsername,
          symbol = _ref2.symbol,
          decimals = _ref2.decimals;

      return function (dispatch) {
        _this.validateAdmin({ username: adminUsername, token: authToken, organization: organization }).then(function (validated) {
          if (!validated) {
            alert('Only an organization admin may register an organization with GitToken');
            throw new Error('Invalid Authorization');
          } else {
            var params = [organization, name, symbol, decimals, adminAddress, adminUsername];
            return _this.sendTransaction({ params: params, method: 'registerToken' });
          }
        }).then(function (txHash) {
          console.log('txHash', txHash);
          // dispatch({ type: null, id: null, value: null })
          return window.web3.eth.getTransactionReceipt(txHash);
        }).then(function (txReceipt) {
          console.log('txReceipt', txReceipt);
        }).catch(function (error) {
          console.log('error', error);
        });
      };
    }
  }, {
    key: 'verifyOrganization',
    value: function verifyOrganization(_ref3) {
      var _this2 = this;

      var admin = _ref3.admin,
          username = _ref3.username,
          token = _ref3.token,
          organization = _ref3.organization;

      return function (dispatch) {
        _this2.registryWorker.postMessage(JSON.stringify({
          event: 'verify_organization',
          payload: { admin: admin, username: username, token: token, organization: organization, uri: _this2.registryAPI + '/verify/' + organization }
        }));
      };
    }
  }, {
    key: 'signTransaction',
    value: function signTransaction(_ref4) {
      var _this3 = this;

      var params = _ref4.params,
          method = _ref4.method;

      return new _bluebird2.default(function (resolve, reject) {
        getAccount().then(function (account) {
          var _registry$method;

          var data = (_registry$method = _this3.registry[method]).getData.apply(_registry$method, _toConsumableArray(params).concat([{ data: unlinked_binary }]));

          var tx = new _ethereumjsTx2.default({
            from: account,
            to: _this3.registry.address,
            data: data,
            value: 0,
            gasLimit: 1e6, // set higher?
            gas: 4e9
          });

          console.log('tx', tx);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'sendTransaction',
    value: function sendTransaction(_ref5) {
      var _this4 = this;

      var params = _ref5.params,
          method = _ref5.method;

      return new _bluebird2.default(function (resolve, reject) {
        var _registry;

        (_registry = _this4.registry)[method].apply(_registry, _toConsumableArray(params).concat([function (error, txHash) {
          if (error) {
            reject(error);
          }
          if (txHash != 'undefined') {
            resolve(txHash);
          }
        }]));
      });
    }
  }, {
    key: 'setAccount',
    value: function setAccount() {
      return function (dispatch) {
        getAccount().then(function (account) {
          dispatch({
            type: 'SET_ACCOUNT_DETAILS',
            id: 'account',
            value: account
          });
        }).catch(function (error) {
          console.log('setAccount::error', error);
        });
      };
    }
  }, {
    key: 'getAccount',
    value: function getAccount() {
      return new _bluebird2.default(function (resolve, reject) {
        window.web3.eth.getAccounts(function (error, accounts) {
          if (error) {
            reject(error);
          }
          console.log('accounts', accounts);
          resolve(accounts[0]);
        });
      });
    }

    // watchRegitrations({ fromBlock=0, toBlock='latest' }) {
    //   return (dispatch) => {
    //
    //     console.log(`Watching Registration Events for: ${this.registry.address}`)
    //
    //     const event = this.registry.Registration({ fromBlock, toBlock }, (error, result) => {
    //       if (error) { console.log('error', error) }
    //       console.log('result', result)
    //     })
    //   }
    // }

  }, {
    key: 'getRegitrations',
    value: function getRegitrations() {
      var _this5 = this;

      return function (dispatch) {

        console.log('Retrieving Registration Events for: ' + _this5.registry.address);

        _this5.registry.allEvents({ fromBlock: 0, toBlock: 'latest' }, function (error, log) {
          if (error) {
            console.log('getRegitrations::error', error);
          }
          // console.log(log)
          var args = log.args;
          var _token = args._token;


          dispatch({
            type: 'SET_REGISTRY_ORGANIZATION_DETAILS',
            id: _token,
            value: args
          });
        });
      };
    }
  }]);

  return RegistryActions;
}();

exports.default = RegistryActions;