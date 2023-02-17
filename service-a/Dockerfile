
FROM node:18-alpine
WORKDIR /service-a
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3001