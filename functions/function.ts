import Web3, { Address } from 'web3';

// HTTPプロバイダーでWeb3インスタンスを作成
export const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));

export function privateKeyToAddress(privateKey:string) {
  // 公開キーを導出
  const publicKey = web3.eth.accounts.privateKeyToAccount(privateKey).address;
  return publicKey;
}

export function exclude0xFromAddress(address: Address) {
  return address.substring(2)
}
export async function getEthBalance(address:Address) {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  return balanceEth;
}

export function addressToBytes32(address: string): string {
  // '0x'を取り除き、左側に0を追加して32バイトにします。
  return '0x' + address.toLowerCase().replace('0x', '').padStart(64, '0');
}

