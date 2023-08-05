# Ambitのtestnet用BOT

## 使用方法
前提　初回はapproveが必要なため、UIで実行してください。本botは2回目以降の自動化が可能です。

※dockerは使わずにローカルのnodejsでも動きます。お好みで。

1. （初回起動時のみ） `npm install`
2. （初回起動時のみ）.env.sampleを参考に.envファイルを作成（private keyを使うので慎重に）
3. `npm run start`でbot稼働


# 注意
複数のアカウントで実行する際、自動的にランダムな順番、アカウントごとに20-100秒のランダムな時間間隔でtransactionを実行するようになっています。