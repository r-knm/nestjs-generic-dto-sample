# r-knm/nestjs-generic-dto-sample

下記の技術記事に関連するコードをアップしたリポジトリです。
[NestJSでのGenericDTO定義とOpenAPIドキュメントでの出力を実装する](https://zenn.dev/r_knm/articles/7c1c7881618025)

## 起動方法

- Node: v20.11.1
  - (Pinned to Package.json by Volta.)
- NestJS: v10

## 動作確認

今回のサンプルでは、「正常レスポンス」と「エラーレスポンス」の２種類のAPIを用意しています。
それぞれ参考用に Postman でのリクエスト画面を添付いたします。
また、SwaggerUIでの共通レスポンス表示についてもスクリーンショットを添付します。

- 正常レスポンス

![スクリーンショット 2024-03-12 20 14 47](https://github.com/r-knm/nestjs-generic-dto-sample/assets/102338067/4e646d97-5bf2-4844-a9a9-b719e70a8ae9)

- エラーレスポンス

![スクリーンショット 2024-03-12 20 15 13](https://github.com/r-knm/nestjs-generic-dto-sample/assets/102338067/2ce46e18-9062-4e67-9ad0-c4ffbb4c7f09)

- SwaggerUIでの共通レスポンス表示

![スクリーンショット 2024-03-12 20 16 03](https://github.com/r-knm/nestjs-generic-dto-sample/assets/102338067/2401ab80-2efb-44fe-8459-2ffe6654d145)
