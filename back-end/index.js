import express from "express";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.use("/", express.static("./public"));

/*app.use((err, req, res, next) => {
    res.status(500).json({ success: false, error: 'Server error, try again later' })
})*/


app.listen(Deno.env.get("PORT"));