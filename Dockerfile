FROM node:22.7.0-alpine3.20

ENV PORT=9000 \
    MONGODB_URI=mongodb://admin:password@134.209.144.193:27017 \
    MONGODB_DATABASE_NAME=appdata

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "/home/app/app.js"]
