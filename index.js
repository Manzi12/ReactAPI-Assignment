import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import matchesRoutes from './api/routes/matches';
import resultsRoutes from './api/routes/results';

dotenv.config();


mongoose.connect(
  "mongodb+srv://manziAPIData:" + process.env.MONGO_PW + "@webappapidata-yatow.mongodb.net/test?retryWrites=true&w=majority"
);

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded())


const port = process.env.PORT;

app.use(express.static('public'));

app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization"
  );

  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods","PUT","POST","PATCH","DELETE","GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/matches", matchesRoutes);
app.use("/results", resultsRoutes);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});