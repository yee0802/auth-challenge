// Import express and cors
import express from "express";
import cors from "cors";

// Set up express
const app = express();
app.disable("x-powered-by");
app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

import userRouter from "./routers/user.js";
app.use("/user", userRouter);

import movieRouter from "./routers/movie.js";
app.use("/movie", movieRouter);

export default app;
