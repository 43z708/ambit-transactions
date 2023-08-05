import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {depositContractInfo} from "../contracts"

import {approve, increaseAllowance} from "./approve"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
 * approve
 */
export async function approveAndDeposit(privateKey:string,account:Web3Account,gasPrice:bigint,amount:string) {
  try {
    // approve
    // await approve(privateKey,account,gasPrice,depositContractInfo.address,amount)
    
    // await increaseAllowance(privateKey,account,gasPrice,amount)

    // deposit
    await deposit(privateKey,account,gasPrice,amount)
  } catch (error) {
    console.error('An error occurred:', error);
  };
}

/**
* deposit
*/
async function deposit(privateKey:string,account:Web3Account,gasPrice:bigint,usdt:string) {
  try {
    const pid = BigInt(web3.utils.toWei(usdt, 'ether'));

    const depositContract = new web3.eth.Contract(depositContractInfo.abi, depositContractInfo.address);
    // @ts-ignore
    const amount:bigint = await depositContract.methods.previewDeposit(pid).call()
    // @ts-ignore
    const deposit = depositContract.methods.deposit(pid, amount, account.address)
    const gasEstimate = Number(await deposit.estimateGas({ from: account.address }));
    const gasLimit = Math.floor(gasEstimate * 1.2);  // Add 20% buffer

    const tx = {
        from: account.address,
        to: depositContractInfo.address,
        gas: gasLimit,
        gasPrice: gasPrice,
        data: deposit.encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

    console.log("Deposit transaction hash: " + receipt.transactionHash);
    console.log("Deposit transaction was mined. Block: " + receipt.blockNumber);
  } catch (error) {
    console.error("Error during deposit transaction: ", error);
  }
}
