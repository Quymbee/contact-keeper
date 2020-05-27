const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @descrip     Get all user contacts
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route       POST api/contacts
// @descrip     Add new contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route       PUT api/contacts
// @descrip     Update contact
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route       DELETE api/contacts
// @descrip     Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = reouter;
