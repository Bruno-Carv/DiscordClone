FROM node:12.18.1

LABEL maincontainer 'bruno silva carvalho <github@brunocarvalhs>'

WORKDIR /www

EXPOSE 3000

CMD npm install && \
    npm start