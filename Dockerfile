FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . ./
RUN npm run build
ENTRYPOINT ["npm", "start"]

