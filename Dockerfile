FROM node:17

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install; \
    elif [ "$NODE_ENV" = "uat" ]; \
        then npm install --only=production; \
    elif [ "$NODE_ENV" = "production" ]; \
        then npm install --only=production; \
    fi

COPY . ./

EXPOSE $PORT

CMD ["node", "index.js"]

