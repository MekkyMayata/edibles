require('dotenv').config();

module.exports = {
  db: process.env.DB_CONNECTION,
  port: process.env.PORT
};
