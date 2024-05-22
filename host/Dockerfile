FROM node:16.17.0-alpine

RUN mkdir app

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./ .

RUN npm run build

RUN npm i -g http-server

EXPOSE 8080
CMD [ "http-server", "dist", "-p", "8080" ]
