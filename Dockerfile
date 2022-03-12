FROM node:14.17.0

RUN mkdir -p /home/bookshelf-api \
  && chown -R node:node /home/bookshelf-api

WORKDIR /home/bookshelf-api

COPY package.json ./

USER node

RUN npm i

COPY --chown=node:node . .

EXPOSE 5000

CMD ["npm", "start"]
