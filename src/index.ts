import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
