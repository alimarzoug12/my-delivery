import cors from "cors";
import bodyParser from "body-parser";
import { Application, json } from "express";

export default (app: Application) => {
  app.use(cors());
  app.use(json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
};
