const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post('/', async (req, res) => {
  try {
    const p = new Product(req.body);
    const saved = await p.save();
    res.json(saved);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;