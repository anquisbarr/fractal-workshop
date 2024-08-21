import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/", (_, res) => {
	res.status(200).send("Hello World!");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
