# Check scripts

This project provides Google Recaptcha service on faucet client.

## How to use

```shell
cd scripts/captcha
cp example.env .env # and then fill the env variable
yarn build
node ./build/webserver.js
```

## How to build docker image

```shell
docker build --pull -t finschia/captcha:manual -f packages/captcha/Dockerfile . # in root path
```
