# インストールの手順 How to install

## 1. アプリのインストール場所の決定

Choose the directory for app

```sh
cd <アプリをインストールするディレクトリ, the directory where install the app>
ex) cd ~/Documents
```

## 2. インストール

Intall the app

```sh
git clone https://<アカウント名, account name>@github.com/yabukazuki/software.git
ex) git clone https://yabukazuki@github.com/yabukazuki/software.git
```

アプリ編集者の場合は,

```sh
git switch main
git pull
```

## 3. 起動方法

Run this app

```sh
docker-compose build --no-cache
docker-compose up -d
```

## 4. アクセス方法

Use this app
ブラウザで localhost にアクセス

参考として, バックエンドのコンテナにアクセスする場合は,

```sh
docker exec -it コンテナの名前 sh
例) docker exec -it software_web_1 sh
```

でコンテナに入ることができます. ただし, ローカル PC の環境に依存するコマンドであるために, コンテナの名前や sh ではなく bash である可能性もあります.
