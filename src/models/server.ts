import express, { application, Request, Response } from 'express';
import bodyParser from "body-parser";

const port = 3000;

const app = express();

app.listen(3000, () => {
    console.log(`Server started on: ${port}`);
})