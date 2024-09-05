const express = require("express");
const path = require("path");
const app = express();
const handleNotFoundError = require("./utilis/error_handling/middlewares/notFoundError");
const handleGlobalError = require("./utilis/error_handling/middlewares/globalErrorHandler");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/new");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.use(handleNotFoundError);
app.use(handleGlobalError);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));