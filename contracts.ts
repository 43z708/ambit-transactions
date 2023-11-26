
 // faucetミントcontract
export const mintContractInfo = {
  address : "0x3b0753208c4Bd5419FeCcD85aB5fB2E4F6722Bc8",
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
  address : "0x070ea863b14E482E7f4A67aA7023699d327064D9",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "rawAmount",
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
  address : "0xb6D109220dFf3b542cD9390DA3A3Dd746e9Dc7c6",
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
  address : "0xBe4823e603179fbA1c5C87255cd6E419fD070F52",
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
  address : "0x682BAadC7750180B7C684D47BaC1A5370e9657e7",
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
  address : "0x7b9776efcff5f5eFC563A4d9B77b56369e6f5264",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "rawAmount",
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
  address : "0xBe4823e603179fbA1c5C87255cd6E419fD070F52",
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
  address : "0xd2AdA8be5c70FA0F5F30754cc43296EA747Bc7D2",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "rawAmount",
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
  address : "0xBe4823e603179fbA1c5C87255cd6E419fD070F52",
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
export const approveAmbtContractInfo = {
  address : "0x9529555417C3721A0494E2133c521666Bb3e3983",
  abi : [
    {
        "constant": true,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "rawAmount",
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
 export const supplyAmbtContractInfo = {
  address : "0xBe4823e603179fbA1c5C87255cd6E419fD070F52",
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
