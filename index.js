console.log('Heck, this is confusing');
console.log('but ill get it!');
const { app } = require('./app.js');






const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

