const { Contact } = require('../models');

module.exports = {
  async selectAll(req, res) {
    try {
      const result = await Contact.findAll();
      res.send(result);
    } catch (err) {
      res.status(500).send({
        error: `Error ${err}`
      });
    }
  },

  async insert(req, res) {
    try {
      const contact = await Contact.create(req.body);
      res.send(contact);
    } catch (err) {
      res.status(500).send({
        error: `Error ${err}`
      });
    }
  },

  async update(req, res) {
    try {
      const uid = req.params.contact_id;

      await Contact.update(req.body, {
        where: {
          id: uid
        }
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: `Error ${err}`
      });
    }
  },

  async delete(req, res) {
    try {
      const uid = req.params.contact_id;
  
      await Contact.destroy({
        where: {
          id: uid
        }
      });
      res.send('deleted');
    } catch (err) {
      res.status(500).send({
        error: `Error ${err}`
      });
    }
  }
};
