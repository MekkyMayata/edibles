FROM node:10-alpine


#create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install

#copy app source code
COPY . .

#Expose the port
EXPOSE 4000

#Start the application
CMD [ "npm", "start"]