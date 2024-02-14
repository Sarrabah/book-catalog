FROM node:21

WORKDIR /app

COPY package.json ./

COPY ./public ./public
COPY ./src ./src
COPY tailwind.config.js ./
COPY postcss.config.js ./

RUN npm install 

EXPOSE 3000

CMD ["npm","start"]
