import Web3 from 'web3';

// load env file
import dotenv from "dotenv";

import {mint} from "./functions/mint"
import {approveAndDeposit} from "./functions/deposit"
import { approveAndSupply } from './functions/supply';
import { borrow } from './functions/borrow';

dotenv.config();
const privateKeys = process.env.PRIVATE_KEYS?.split(',') ?? [];

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // Binance Smart Chain Testnet

async function main() {
  if (privateKeys.length === 0) {
    console.log("private keyがありません")
    return
  }
  // アカウントをランダムに並び替える
  const randomPrivateKeys = privateKeys.sort((a, b) => 0.5 - Math.random())

  randomPrivateKeys.forEach(async (privateKey,index) => {
    if (index > 0) {
      // 2回目のtransaction以降、20秒から100秒のランダムなウェイトタイム
      await randomWait()
    }
    // transaction実行
    await mintAndDeposit("0x" + privateKey)
  })
}

function randomWait() {
  // 20秒から100秒の間のランダムな時間（ミリ秒）を生成
  const waitTime = (Math.floor(Math.random() * 81) + 20) * 1000;
  console.log(waitTime * 1/1000 + "秒待機...")

  return new Promise(resolve => setTimeout(resolve, waitTime));
}


async function mintAndDeposit(privateKey:string) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  console.log(account.address + "のtransactionを実行します")

  const gasPrice = await web3.eth.getGasPrice();
  // mint(500USDT生成)
  // await mint(privateKey,account,gasPrice)

  // 300USDTをdepositする
  const depositAmount = "300";
  await approveAndDeposit(privateKey,account,gasPrice,depositAmount)
  
  // 200USDTをsupplyする
  const supplyAmount = "200";
  await approveAndSupply(privateKey,account,gasPrice,supplyAmount)
  
  // 100USDTをborrowする
  const borrowAmount = "100";
  await borrow(privateKey,account,gasPrice,borrowAmount)

}


main();