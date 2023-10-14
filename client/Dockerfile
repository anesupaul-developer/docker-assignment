FROM node:14-slim AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/ .

RUN chown nginx:nginx /usr/share/nginx/html/*

ENTRYPOINT ["nginx", "-g", "daemon off;"]

