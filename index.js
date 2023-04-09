const express = require('express');
const app = express();
const port = 70;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})


// app.use(), router.use()  are middlewares can't allow requests to pass them


// SSR in Express...
/*app.use(express.static('ssr'));
app.get('/', (req, res) => {
    return res.render('index');
})*/

app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/login', (req, res) => {
    res
        .status(401)
        .json({ message: 'Please Login to continue' });
})


