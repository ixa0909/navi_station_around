# アプリのインストールと起動の手順 How to install

日本語による説明の後に英語の説明を記述している.

After Japanese explanation, English one is following.

**日本語版:**

## 0. 備考

Git や Docker のインストールは完了していることを前提とする. もし, PC の OS や設定の違いなどにより, 後述のインストール方法の実行に問題が応じた場合は issue への投稿を求める.

筆者の OS は Mac M1 である.

## 1. アプリのインストール場所の決定

アプリをインストールするディレクトリに移動する.

```sh
cd <アプリをインストールするディレクトリ, the directory where install the app>
ex) cd ~/Documents
```

## 2. インストール

コマンドラインインターフェース上で github のリポジトリをクローンする.

```sh
git clone https://github.com/yabukazuki/software.git
```

あるいは,

```sh
git clone https://<アカウント名, account name>@github.com/yabukazuki/software.git
ex) git clone https://yabukazuki@github.com/yabukazuki/software.git
```

必要に応じて, パスワードを入力する.
リポジトリのディレクトリに移動しておく.

```sh
cd software
```

## 3. 前準備

本アプリではホットペッパー API を使用しているため, アプリを起動する前に, API キーを記載した設定ファイルを以下の手順で用意する必要がある.

- API キーの発行

API キーを https://webservice.recruit.co.jp/register/ で発行する. メールアドレスの登録のみで所要時間は 5 分ほどである.

- API キー記載の json ファイルの作成

API キーを記載した json ファイルを作成する。ファイル名は api_key.json で、形式は

```json
{
 "hottopepper": "API キー"
}
```

である.

- 作成したファイルの配置

作成したファイルを software/backend/config/ に置く.

## 4. Docker の仮想環境の構築

Docker イメージを作成し, コンテナを起動する.

```sh
docker-compose build --no-cache
docker-compose up -d
```

## 5. アクセス方法

ブラウザで http://localhost/ を開き, 起動したアプリにアクセスする.

**英語版:**

## 0. Notes

It is assumed that Git and Docker are already installed. If you encounter any problems with the installation method described later due to differences in PC OS or settings, post an issue.

The author's OS is Mac M1.

## 1. Decide where to install the app

Move to the directory where you want to install the app.

```sh
cd <the directory where install the app>
ex) cd ~/Documents
```

## 2. Installation

Clone the github repository on the command line interface.

```sh
git clone https://github.com/yabukazuki/software.git
```

Or

```sh
git clone https://<account name>@github.com/yabukazuki/software.git
ex) git clone https://yabukazuki@github.com/yabukazuki/software.git
```

Enter the password if necessary.
Move to the repository directory.

```sh
cd software
```

## 3. Preparation

This app uses the Hot Pepper API, so you need to prepare a configuration file with the API key. Follow the steps below.

- Get the API key

Get the API key at https://webservice.recruit.co.jp/register/
It need you only register your email address and takes about 5 minutes.

- Create a json file with the API key

Create a json file with the API key. The file name is "api_key.json", and the format is

```json
{
 "hottopepper": "API key"
}
```

- Place the created file

Place the created file in software/backend/config/

## 4. Build the Docker virtual environment

Create a Docker image and start the container.

```sh
docker-compose build --no-cache
docker-compose up -d
```

## 5. How to access

Open http://localhost/ in your browser to access the launched app.
