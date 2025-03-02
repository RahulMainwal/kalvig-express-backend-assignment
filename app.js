import express from "express";
import morgan from "morgan";
import taskRouter from "./routes/task.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5000;

const environment = process.env.NODE_ENV || "DEVELOPMENT";

if (environment === "PRODUCTION") {
 app.use(morgan("dev"));
}

app.use(express.json());
app.use(
 cors({
  origin: "*",
 })
);;

app.get("/", (req, res) => {
 return res.status(200).json({ message: "Server has been running well!" });
});
// Task root route
app.use("/api/tasks", taskRouter);

app.listen(port, () => {
 console.log("App is listening at port: " + port);
});

export default app;
