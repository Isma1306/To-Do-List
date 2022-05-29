const Express = require('express');
const Mongoose = require('mongoose');
const cors = require('cors');
const { router } = require('./router');


const PORT = 3003;
const app = new Express();

app.use(cors());
app.use(Express.json());
app.use(router);


(async () => {
  try {
    await Mongoose.connect('mongodb://localhost:27017/events');
    app.listen(PORT, console.log(`Listen in http://localhost:${PORT}`));
    console.log('connected to mongo');
  } catch (error) {
    console.log(error);
  }
})();
