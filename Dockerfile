FROM node:latest

ENV APP=/usr/src/todo-list-api

WORKDIR $APP

# RUN npm install -g yarn

COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP

EXPOSE 3000

CMD npm start
