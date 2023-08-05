import Web3, { Address } from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {supplyContractInfo,approveContractInfo} from "../contracts"

import {approve} from "./approve"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
 * approve
 */
export async function approveAndSupply(privateKey:string,account:Web3Account,gasPrice:bigint,amount:string) {
  try {
    const spender = "0xd0A6102e22Ce50AEe65a02E09a6d073609a0d0fD"
    // approve
    await approve(privateKey,account,gasPrice,spender,amount)

    console.log("3秒待ちます")
    new Promise(resolve => setTimeout(resolve, 3000));

    // supply
    await supply(privateKey,account,gasPrice,amount)
  } catch (error) {
    console.error('An error occurred:', error);
  };
}

/**
* supply
*/
async function supply(privateKey:string,account:Web3Account,gasPrice:bigint,tokenAmount:string) {
  try {
    const amount = BigInt(web3.utils.toWei(tokenAmount, 'ether'));

    const supplyContract = new web3.eth.Contract(supplyContractInfo.abi, supplyContractInfo.address);
    // @ts-ignore
    const supply = supplyContract.methods.supply(approveContractInfo.address,amount)
    const gasEstimate = await supply.estimateGas({ from: account.address });

    const tx = {
        from: account.address,
        to: supplyContractInfo.address,
        gas: gasEstimate,
        gasPrice: gasPrice,
        data: supply.encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

    console.log("Supply transaction hash: " + receipt.transactionHash);
    console.log("Supply transaction was mined. Block: " + receipt.blockNumber);
  } catch (error) {
    console.error("Error during supply transaction: ", error);
  }
}
