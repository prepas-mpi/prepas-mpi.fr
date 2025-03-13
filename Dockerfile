FROM hugomods/hugo:0.145.0 AS build

WORKDIR /app

COPY . .

RUN hugo

#-------------------------------------#

FROM nginx:alpine AS prod

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/public /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
