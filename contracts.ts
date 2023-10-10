
 // faucetミントcontract
export const mintContractInfo = {
  address : "0xB5451928765ec1E0C28E5a789A3b218E313A92E8",
  abi : [
    {
      "constant": false,
      "inputs": [],
      "name": "mintAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

// approveContract
export const approveUsdtContractInfo = {
  address : "0xcCCaf3223E5D74EBD9440694E7440951DdF04aA0",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
};


 // deposit用contract
 export const depositUsdtContractInfo = {
  address : "0x02edbff39129F3f40AAf30b30a4298519de9Cd32",
  abi : [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_pid",
                "type": "uint256"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "previewDeposit",
      "outputs": [
        {
          "name": "outputAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
};


 // supply用contract
 export const supplyUsdtContractInfo = {
  address : "0x6Bc31922E153b529e6Cc75Cb8d13Ac95d87bAE7D",
  abi : [
    {
      "constant": false,
      "inputs": [
        {
          "name": "qToken",
          "type": "address"
        },
        {
          "name": "uAmount",
          "type": "uint256"
        }
      ],
      "name": "supply",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

 // borrow用contract
 export const borrowUsdtContractInfo = {
  address : "0x4B0828252a5E6fD8BAec57a788f260823fc6b12d",
  abi : [
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

// approveContract
export const approveBtcContractInfo = {
  address : "0x87bAf3341bBFeccF1213345c0Bb294B523B093F5",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
};


 // supply用contract
 export const supplyBtcContractInfo = {
  address : "0x6Bc31922E153b529e6Cc75Cb8d13Ac95d87bAE7D",
  abi : [
    {
      "constant": false,
      "inputs": [
        {
          "name": "qToken",
          "type": "address"
        },
        {
          "name": "uAmount",
          "type": "uint256"
        }
      ],
      "name": "supply",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

// approveContract
export const approveEthContractInfo = {
  address : "0xC173B72EDe2A2DBB4094616b2fa4e0D582c9eF53",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
};


 // supply用contract
 export const supplyEthContractInfo = {
  address : "0x6Bc31922E153b529e6Cc75Cb8d13Ac95d87bAE7D",
  abi : [
    {
      "constant": false,
      "inputs": [
        {
          "name": "qToken",
          "type": "address"
        },
        {
          "name": "uAmount",
          "type": "uint256"
        }
      ],
      "name": "supply",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};
