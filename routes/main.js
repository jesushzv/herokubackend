//Controllers
var employeesController = require('./controllers/employeesController');

// Function to export the routes.
module.exports = function(app) {
    app.get('/',(req, res) => {
        res.send('Welcome to the home page!');
    })
    app.get('/employees',employeesController.getAllEmployees());
}