FROM node:gallium-alpine3.16

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
