FROM node:18
WORKDIR /app
COPY package.json ./ ./backend/
RUN npm install
COPY . .
CMD ["node", "server.js"]
EXPOSE 5000
