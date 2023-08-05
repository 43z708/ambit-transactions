import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';


import {approveContractInfo, depositContractInfo} from "../contracts"

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

/**
 * usdtのapprove
 */
export async function approve(privateKey:string,account:Web3Account,gasPrice:bigint,spender:string,amount:string) {
  const amountToApprove = BigInt(web3.utils.toWei(amount, 'ether'));

  try {
    const approveContract = new web3.eth.Contract(approveContractInfo.abi, approveContractInfo.address);

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
        to: approveContractInfo.address,
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
export async function increaseAllowance(privateKey:string,account:Web3Account,gasPrice:bigint,amount:string) {
  try {

    const approveContract = new web3.eth.Contract(approveContractInfo.abi, approveContractInfo.address);

    const addedValue = web3.utils.toWei(amount, 'ether'); 
    // @ts-ignore
    const increaseAllowance = approveContract.methods.increaseAllowance(depositContractInfo.address, addedValue)
    const gasEstimate = await increaseAllowance.estimateGas({ from: account.address });

    const tx = {
      from: account.address,
      to: approveContractInfo.address,
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
