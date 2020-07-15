FROM node:10-alpine

#version the app
ADD VERSION .

#create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install

#copy app source code
COPY . .

#Expose the port
EXPOSE 5000

#Start the application
CMD [ "npm", "start"]