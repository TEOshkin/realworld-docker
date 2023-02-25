FROM node:16-alpine
WORKDIR /usr/src/app
COPY src/package*.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]