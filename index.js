const app = require('express');
routes = require('./routes/main.js');

routes(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});