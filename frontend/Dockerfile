FROM node:latest as builder

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./package*.json /app/
COPY ./node_modules /app/node_modules
# COPY ./build /app/build

# RUN npm install

# Set the environment variable for Node.js to use legacy crypto policy
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /var/www/build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
