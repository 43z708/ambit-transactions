import Web3, { Address } from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {supplyUsdtContractInfo,approveUsdtContractInfo,approveBtcContractInfo,supplyBtcContractInfo,approveEthContractInfo,supplyEthContractInfo} from "../contracts"

import {approve, increaseAllowance} from "./approve"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
 * approve
 */
export async function approveAndSupply(privateKey:string,account:Web3Account,gasPrice:bigint,amount:string,ticker: string) {
  try {
    // approve
    await increaseAllowance(privateKey,account,gasPrice,amount,ticker)

    console.log("3秒待ちます")
    new Promise(resolve => setTimeout(resolve, 3000));

    // supply
    await supply(privateKey,account,gasPrice,amount,ticker)
  } catch (error) {
    console.error('An error occurred:', error);
  };
}

/**
* supply
*/
export async function supply(privateKey:string,account:Web3Account,gasPrice:bigint,tokenAmount:string,ticker: string) {
  try {
    const amount = BigInt(web3.utils.toWei(tokenAmount, 'ether'));
    
    const contractAbi = (() => {
      switch (ticker) {
        case "USDT" :
          return supplyUsdtContractInfo.abi
        case "BTC" :
          return supplyBtcContractInfo.abi
        case "ETH" :
          return supplyEthContractInfo.abi
        default :
          return supplyUsdtContractInfo.abi
      }
    })()
    
    const supplycontractAddress = (() => {
      switch (ticker) {
        case "USDT" :
          return supplyUsdtContractInfo.address
        case "BTC" :
          return supplyBtcContractInfo.address
        case "ETH" :
          return supplyEthContractInfo.address
        default :
          return supplyUsdtContractInfo.address
      }
    })()
    const approvecontractAddress = (() => {
      switch (ticker) {
        case "USDT" :
          return approveUsdtContractInfo.address
        case "BTC" :
          return approveBtcContractInfo.address
        case "ETH" :
          return approveEthContractInfo.address
        default :
          return supplyUsdtContractInfo.address
      }
    })()

    const supplyContract = new web3.eth.Contract(contractAbi, supplycontractAddress);
    // @ts-ignore
    const supply = supplyContract.methods.supply(approvecontractAddress,amount)
    const gasEstimate = Number(await supply.estimateGas({ from: account.address }));
    const gasLimit = Math.floor(gasEstimate * 1.2);  // Add 20% buffer

    const tx = {
        from: account.address,
        to: supplycontractAddress,
        gas: gasLimit,
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
