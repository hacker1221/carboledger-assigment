const express= requires('express')
const app = express();
const PORT = 8000;

// import middleware
const { logReqRes } = require("./middlewares")

// configure DB


//import router


// use middleware
app.use(logReqRes("log.txt"))

// add routes to project



app.listen(PORT, () => console.log(`server started at ${PORT}`));
