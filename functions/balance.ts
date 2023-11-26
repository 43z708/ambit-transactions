import {privateKeyToAddress,getEthBalance} from './function'
import {accounts,privateKeys} from './accounts'
import dotenv from "dotenv";

dotenv.config();

async function main() {

  for (const [index,privateKey] of privateKeys.entries()) {
    const address = privateKeyToAddress("0x" + privateKey)
    await getEthBalance(address).then(balance => {
      let num = "sub" + String(index + 1)
        num = index === 0 ? "main1" : index === 1 ? "main2" : index === 2 ? "main3" : "sub" + String(index - 2)
      console.log(num + `: address => ${address}, balance => ${balance} ETH`);
    });

  }

}

main()
