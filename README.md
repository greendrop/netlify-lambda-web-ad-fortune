# netlify-lambda-web-ad-fortune

占い配信 Web ad Fortune 無料版APIを中継してレスポンスヘッダー`Access-Control-Allow-Origin`を設定するNetlify Lambdaです。

## 使用言語・ライブラリ

- 占い配信 Web ad Fortune 無料版API http://jugemkey.jp/api/waf/api_free.php

## 環境構築アプリケーション

- Docker
- Docker Compose
- direnv
- git

## セットアップ

```shell
$ git clone git@github.com:greendrop/netlify-lambda-web-ad-fortune.git
$ cd netlify-lambda-web-ad-fortune
$ vi .envrc
$ direnv allow
$ docker-compose pull
$ docker-compose build
$ docker-compose run --rm node bash
$ yarn install
$ exit
$ docker-compose up
```

### .envrc

```
export USER_ID=`id -u`
export GROUP_ID=`id -g`
```

## ブラウザで表示

http://localhost:9000/.netlify/functions/horoscope