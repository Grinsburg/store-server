FROM node:12

# создание директории приложения
WORKDIR /src

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . .

EXPOSE 8080
CMD npm run start

# FROM node:10 as static

# FROM node:10
# ENV NODE_ENV=production
# ADD src .

# WORKDIR /app
# ENV NODE_ENV=production
# RUN npm --production=false install
# # COPY --from=static /build ./build/public
# CMD npm run start