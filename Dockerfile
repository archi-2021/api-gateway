FROM node:carbon-slim
# Create app directory
WORKDIR /ruteame_api_gateway

# Install app dependencies
COPY package.json /ruteame_api_gateway/
RUN npm install

# Bundle app source
COPY . /ruteame_api_gateway/

RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
