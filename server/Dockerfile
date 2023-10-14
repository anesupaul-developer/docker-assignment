FROM node:14-slim

WORKDIR /usr/meanserver

COPY ./ ./

RUN npm install

RUN npm install -g concurrently

EXPOSE 5000

CMD ["concurrently","npm:start", "npm:seed"]