import 'dotenv/config'
import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import router from './routes/referralRoutes.js'
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const server = createServer(app);

app.use(express.urlencoded({ limit: '100mb', extended: true }))
app.use(bodyParser.json());
app.use(express.json({
    limit: '100mb',
    verify: (req, res, buf) => {
        req.rawBody = buf
    }
}))

app.use(express.text({
    limit: '100mb'
}))

app.use(cors({
    origin: [process.env.CORS_ORIGIN, "http://localhost:3000"],
    methods: 'GET,PUT,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}));


app.use("/api", router);

app.use(errorHandler);
server.listen(process.env.PORT, () => console.log('Server started on: ' + process.env.PORT))

export default app;