const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

//Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`shutting down server due to uncaught exceptions`);
  process.exit(1);
});

//setting up config file
dotenv.config({ path: 'backend/config/config.env' });

//Connecting to db
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//handle unhandled Promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down server due to uUnhandled Promise rejection');
  server.close(() => {
    process.exit(1);
  });
});
