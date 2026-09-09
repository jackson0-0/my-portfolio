import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import demoRoutes from "./routes/demo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. load environment variables from server/.env before anything reads them
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// 2. allow the frontend (on a different origin/port) to call this API
app.use(cors());
// 3. parse incoming JSON request bodies
app.use(express.json());
// 4. mount all demo-related routes under /api
app.use("/api", demoRoutes);

// 5. start listening for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));