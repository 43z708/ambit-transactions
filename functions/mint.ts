import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';

import {mintContractInfo} from "../contracts"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet


/**
* mint
*/
export async function mint(privateKey:string,account:Web3Account,gasPrice:bigint) {

  try {
    const mintContract = new web3.eth.Contract(mintContractInfo.abi, mintContractInfo.address);
    // @ts-ignore
    const mintAll = mintContract.methods.mintAll()
    const gasEstimateMint = await mintAll.estimateGas({ from: account.address });

    const txMint = {
      from: account.address,
      to: mintContractInfo.address,
      gas: gasEstimateMint,
      gasPrice: gasPrice,
      data: mintAll.encodeABI()
    };

    const signedTxMint = await web3.eth.accounts.signTransaction(txMint, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTxMint.rawTransaction)

    console.log("Mint transaction hash: " + receipt.transactionHash);
    console.log("Mint transaction was mined. Block: " + receipt.blockNumber);

    console.log("3秒待ちます")
    new Promise(resolve => setTimeout(resolve, 3000));

  } catch (error) {
    console.error('Error during Mint transaction:', error);
  };
}
