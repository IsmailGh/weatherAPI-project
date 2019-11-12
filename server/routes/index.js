//Loops thorough all the routes in api folder and exports them 

const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    fs.readdirSync('routes/api/').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
    })
}