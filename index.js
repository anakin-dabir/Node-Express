import app from './express';
import config from './config/config';
import connectDb from './db';
import Template from './templates';
import { userRoute } from './routes/routes';
import express from 'express';
import { postRoute } from './routes/post';

//app.get('/', (req, res) => res.send("<h1>Dashboard</h1>"));
app.use('/user', userRoute);
app.use('/post', postRoute);

// app.get('/', (req, res) => {
//     res.status(400).json('User error');
// })


connectDb(config.mongoUri);
app.listen(config.port, (err) => {
    if (err) console.log(err);
    console.log(`Server running at http://localhost:${config.port}`)
})


























// app.use(), router.use()  are middlewares can't allow requests to pass them


// SSR in Express...
/*app.use(express.static('ssr'));
app.get('/', (req, res) => {
    return res.render('index');
})*/

app.get('/', (req, res) => {
    res.status(404).json('Hi');
})
app.post('/books/delete', (req, res) => {
    res.send('1 Book by this user deleted')
})


