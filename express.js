import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
//npm i <package> --save -dev {saved as dependency in package.json used in development not in production}
/* => All Middlewares <= */
//'body-parser' => middleware used to parse data from req.body into JSON 
// app.use(express.json()) // => Same but inbuilt
app.use(bodyParser.json()); // => parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // => parse url-encoded data
app.use(cookieParser()); // => parse cookie from data

/*
app.use(compress());  => compress response data using algorithms
app.use(helmet());    => provide security from attacks by setting http headers
*/
app.use(cors());    // => allow Cross Site Recource Sharing

export default app;


