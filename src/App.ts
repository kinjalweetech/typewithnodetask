import express from "express";
import dotenv from "dotenv";
import router from "./route/booksRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api",router ); //get the all routes

app.get("/", (req, res) => {
  res.send("Home page");
});
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
