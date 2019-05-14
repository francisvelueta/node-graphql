const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = () => {
  let db = 'booking';
  if (process.env.NODE_ENV === 'test') db = 'booking_tests';
  const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${db}?retryWrites=true01`;
    // 
    mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {})
    .catch(err => { throw new Error(err); })
}

