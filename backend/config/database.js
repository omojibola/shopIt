const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(`MongoDb Connected with Host ${con.connection.host}`);
    })
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
