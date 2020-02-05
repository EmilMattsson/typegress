FROM node:12.13.0-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install --prod

COPY src ./

EXPOSE 4000
CMD [ "yarn", "start" ]