from node:12-alpine
WORKDIR /usr/activator

COPY client ./client
COPY server ./server

RUN cd client && npm install
RUN cd client && npm build

RUN cd server && npm install

WORKDIR /usr/activator/server

CMD [ "npm", "start" ]