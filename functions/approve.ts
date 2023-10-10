import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {approveBtcContractInfo, approveEthContractInfo, approveUsdtContractInfo, depositUsdtContractInfo, supplyUsdtContractInfo} from "../contracts"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
 * usdtのapprove
 */
export async function approve(privateKey:string,account:Web3Account,gasPrice:bigint,spender:string,amount:string) {
  const amountToApprove = BigInt(web3.utils.toWei(amount, 'ether'));

  try {
    const approveContract = new web3.eth.Contract(approveUsdtContractInfo.abi, approveUsdtContractInfo.address);

    // @ts-ignore
    const result:string = await approveContract.methods.allowance(account.address, spender).call();
    const currentAllowance = BigInt(result);
    const requiredAllowance = amountToApprove;

    if (currentAllowance < requiredAllowance) {
      // @ts-ignore
      const approve = approveContract.methods.approve(spender, amountToApprove.toString())
      const gasEstimateApprove = await approve.estimateGas({ from: account.address });
      const tx = {
        from: account.address,
        to: approveUsdtContractInfo.address,
        gas: gasEstimateApprove,
        gasPrice: gasPrice,
        data: approve.encodeABI(),
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('Transaction confirmed, block number:', receipt.blockNumber);
    } else {
      console.log('No need to approve, current allowance is sufficient.');
    }
  } catch (error) {
    console.error('Error during approve transaction:', error);
  }
}

/**
 * increaseAllowance
 */
export async function increaseAllowance(privateKey:string,account:Web3Account,gasPrice:bigint, amount:string,ticker: string) {
  try {
    const spender = (() => {
      switch (ticker) {
        case "depoUSDT" :
          return "0x02edbff39129F3f40AAf30b30a4298519de9Cd32"
        case "USDT" :
          return "0xBB2a93533C77df4ADEd8270f2CE884917e80d91E"
        case "BTC" :
          return "0xe7BC40977B0CCEBA1814FF21c57F6e621eedBF4F"
        case "ETH" :
          return "0x9b455f3325F8F8A233A46140fBCE798965B994a7"
        default :
          return ""
      }
    })()

    
    const contractAbi = (() => {
      switch (ticker) {
        case "USDT" :
          return approveUsdtContractInfo.abi
        case "BTC" :
          return approveBtcContractInfo.abi
        case "ETH" :
          return approveEthContractInfo.abi
        default :
          return approveUsdtContractInfo.abi
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
          return approveUsdtContractInfo.address
      }
    })()

    const approveContract = new web3.eth.Contract(contractAbi, approvecontractAddress);

    const addedValue = web3.utils.toWei(amount, 'ether');
    // @ts-ignore
    const increaseAllowance = approveContract.methods.increaseAllowance(spender, addedValue)
    const gasEstimate = await increaseAllowance.estimateGas({ from: account.address });

    const tx = {
      from: account.address,
      to: approvecontractAddress,
      gas: gasEstimate,
      gasPrice: gasPrice,
      data: increaseAllowance.encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  
    console.log("IncreaseAllowance transaction hash: " + receipt.transactionHash);
    console.log("IncreaseAllowance transaction was mined. Block: " + receipt.blockNumber);
  } catch (error) {
    console.error('Error during increaseAllowance transaction:', error);
  };
}
