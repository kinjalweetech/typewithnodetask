import app from "./App";

const port = process.env.SERVER_PORT || 3000;

app.listen (port, () => {
    console.log(`Server is running on Port${port}`);
    
});
