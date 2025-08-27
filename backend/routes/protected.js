const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

router.get('/', [auth, authorize(['admin'])], (req, res) => {
  res.json({ msg: 'Welcome admin' });
});

router.get('/user', auth, (req, res) => {
  res.json({ msg: 'Welcome user' });
});

module.exports = router;
