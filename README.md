## シンプルなNode.jsのWebサーバー

Node.jsをなまで書くのではなく、ECMAScrpt6で書いてビルドしてから立ち上げる。

#### 事前準備

Node.jsを使える環境で、yarnコマンドだけグローバルにnpmでインストールしておいてください。

```
$ npm install -g yarn
```

#### セットアップ

依存関係のあるパッケージをpackage.jsonの内容に従ってダウンロードする。

```sh
$ yarn install
```

#### ビルド

```sh
$ yarn build
```

2. エラーが発生しておらず、必要なファイルが生成されていることを確かめる

```sh
$ ls dist/
server.js
```

#### サーバーの立ち上げ

```sh
$ yarn serve
```

で、Expressを使ったWebサーバーが立ち上がります。

ポート番号は32100。

http://localhost:32100/static/

をブラウザで開くと、public/static ディレクトリにある index.html が表示される。

http://localhost:32100/api/terminals/2/status

へのアクセスで、 src/terminas.es に記載されたgetのAPIにアクセスできる。
