import express from "express";
import morgan from "morgan";
import router from "./routes";

const app = express();
app.use(morgan("combined"));

app.use(router);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
