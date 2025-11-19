import express from "npm:express";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use("/api", router)
app.listen(4000);