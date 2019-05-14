const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Booking ${app.get('env')} running on ${port}`));

// 8bM6gzUQqLPOz8vO