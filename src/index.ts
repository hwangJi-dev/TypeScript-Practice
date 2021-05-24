import express from "express"; //express 모듈 import
const app = express(); // Express 객체 app으로 모든 서버의 일을 처리함
import connectDB from "./loaders/db";

//connect Database
connectDB();

app.use(express.json());

app.use("/api/hello", require("./api/hello"));

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
  .listen(9000, () => {
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