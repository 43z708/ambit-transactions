
import fs from 'fs';
import path from 'path';
import dotenv from "dotenv";

// JSONファイルのパスを指定
const filePath = path.resolve('./addresses.json');

// ファイルを読み込む
const jsonData = fs.readFileSync(filePath, 'utf-8');

// JSONをパースしてオブジェクトの配列に変換
type Account = { name: string, address: string, privateKey: string }
export const accounts: Account[] = jsonData ? JSON.parse(jsonData) : [];

dotenv.config();

const envPrivateKeys = process.env.PRIVATE_KEYS?.split(',') ?? []

export const privateKeys = accounts.length > 0 ? envPrivateKeys.concat(accounts.map((account) => account.privateKey)) : envPrivateKeys;