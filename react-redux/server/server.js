const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // when the client doesn't support PUT and DELETE
const cors = require('cors');

// Model configuration
const { sequelize } = require('./models');

// start express
const app = express();

// Routes
const Routes = require('./routes/contacts');

// Config
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

// Set routes
app.use('/api/', Routes);

sequelize.sync()
  .then(() => app.listen(PORT));
