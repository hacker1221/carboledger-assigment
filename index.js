const express= require('express')
const app = express();
const PORT = 8000;
const db = require("./models");

// import middleware
const { logReqRes } = require("./middleware")

// configure DB

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("The table for the User model was just (re)created!");
//     // run();
//     });


//import router
const companyRouter= require("./routers/company.router")
const emissionRouter= require("./routers/emission.router")


// use middleware
app.use(logReqRes("log.txt"))

// add routes to project

app.use("/api/companies",companyRouter)
app.use("/api/emission-records",emissionRouter)


app.listen(PORT, () => console.log(`server started at ${PORT}`));
