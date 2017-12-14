FROM nginx:1-alpine

WORKDIR /usr/share/nginx/html

COPY ./build /usr/share/nginx/html
