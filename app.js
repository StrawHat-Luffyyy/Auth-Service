import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js"
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();


app.use(express.json());
app.use(cookieParser())

app.use('/api' , authRoutes)

app.get("/", (req, res) => {
  res.send("Auth-Service");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on the port : ${process.env.PORT}`);
  });
}).catch((error) => {
  console.log("Failed to connect to the database" , error);
});