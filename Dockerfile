FROM node:9.2

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install --silent
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s build"]
