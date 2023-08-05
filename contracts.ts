
 // faucetミントcontract
export const mintContractInfo = {
  address : "0x054db28c45f7efe40e5b650efc68c3c3c3e002ed",
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
export const approveContractInfo = {
  address : "0x221c5b1a293aac1187ed3a7d7d2d9ad7fe1f3fb0",
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
 export const depositContractInfo = {
  address : "0xa27a3b9c0e8124cb71e5c154c9f21b843812c618",
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
            },
            {
                "name": "_ref",
                "type": "address"
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
 export const supplyContractInfo = {
  address : "0x153b124d59d3a624c3c6de3b1280a1bf7e1dbcb7",
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
 export const borrowContractInfo = {
  address : "0x67Fca3D0D21999364109Dac71c4c8208D489320D",
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
