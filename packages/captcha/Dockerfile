# Build:
#   docker build --pull -t finschia/captcha:manual -f packages/captcha/Dockerfile .
# Run:
#   docker run --rm finschia/captcha:manual version
#
# During the build step the working directory must be the repo root such that the
# app has access to all installed dependencies.

FROM node:16-alpine as build-env

ADD . /app
WORKDIR /app

RUN yarn install && yarn run build
# todo check views file folder
RUN (cd packages/captcha && SKIP_BUILD=1 yarn pack-node)

# Use Alpine and install Node.js which is 50% smaller than the -alpine version of the node
# image (53 MB including the captcha app).
FROM alpine:3.16

# Installs Node.js 16 (https://pkgs.alpinelinux.org/packages?name=nodejs&branch=v3.15)
RUN apk add --update nodejs

COPY --from=build-env /app/packages/captcha /app/packages/captcha
COPY --from=build-env /app/packages/captcha/views /app/packages/captcha/dist/views

WORKDIR /app/packages/captcha

EXPOSE 3000
ENTRYPOINT ["node","dist/node/webserver.js"]
