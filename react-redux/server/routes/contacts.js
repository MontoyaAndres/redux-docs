const express = require('express');
const Router = express.Router({ mergeParams: true });

// Controllers
const contactsController = require('../controllers/contacts');

Router.get('/contacts', contactsController.selectAll);
Router.post('/contacts', contactsController.insert);
Router.put('/contacts/:contact_id', contactsController.update);
Router.delete('/contacts/:contact_id', contactsController.delete);

module.exports = Router;
