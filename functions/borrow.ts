import Web3, { Address } from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {borrowContractInfo} from "../contracts"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
* borrow
*/
export async function borrow(privateKey:string,account:Web3Account,gasPrice:bigint,tokenAmount:string) {
  try {
    const amount = BigInt(web3.utils.toWei(tokenAmount, 'ether'));

    const borrowContract = new web3.eth.Contract(borrowContractInfo.abi, borrowContractInfo.address);
    // @ts-ignore
    const borrow = borrowContract.methods.borrow(amount)
    const gasEstimate = Number(await borrow.estimateGas({ from: account.address }));
    const gasLimit = Math.floor(gasEstimate * 1.2);  // Add 20% buffer


    const tx = {
        from: account.address,
        to: borrowContractInfo.address,
        gas: gasLimit,
        gasPrice: gasPrice,
        data: borrow.encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

    console.log("Borrow transaction hash: " + receipt.transactionHash);
    console.log("Borrow transaction was mined. Block: " + receipt.blockNumber);
  } catch (error) {
    console.error("Error during borrow transaction: ", error);
  }
}
