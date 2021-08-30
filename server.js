const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes')

//initialize express
const app = express();
const PORT = process.env.PORT || 3001;

//expresss middleware (settings)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express routes
app.use(routes);

//express listen, starts the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('waddup')
    })
})