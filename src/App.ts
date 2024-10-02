import express from "express";
import dotenv from "dotenv";
import router from "./route/booksRoutes";


dotenv.config();

const app = express();
app.use(express.json());

// Use the routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Home page");
});

// Error handling middleware for unhandled routes (404)
app.use((req, res, next) => {
  res.status(404).send("Resource not found");
});

// General error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
