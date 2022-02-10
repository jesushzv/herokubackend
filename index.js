const app = require('express');
routes = require('./routes/main.js');

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});