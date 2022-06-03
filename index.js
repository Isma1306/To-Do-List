const Express = require('express');


const PORT = 3004;
const app = new Express();
app.use(Express.static('./docs'));



(async () => {
  try {
    app.listen(PORT, console.log(`Listen in http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();