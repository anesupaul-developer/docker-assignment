FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY localhost.crt /etc/nginx/localhost.cert
#COPY localhost.key /etc/nginx/localhost.key
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]