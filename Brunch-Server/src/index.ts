import express from "express";
const app = express();
import connectDB from "./loaders/db";

// Connect Database
connectDB();

//app.use(express.urlencoded());
app.use(express.json());

// Define Routes
 app.use("/api/writers", require("./api/writers"));
// app.use("/api/keywords", require("./api/keywords"));
 //app.use("/api/search", require("./api/search"));
 //app.use("/api/writers", require("./api/writers"));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
