const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { _id: '1', name: 'Brake Pad', company: 'Hero', category: 'Brake', price: 350, stock: 10 }
];

app.get('/api/products', (req,res)=>{
  res.json(products);
});

app.post('/api/products', (req,res)=>{
  const newP = { _id: Date.now().toString(), ...req.body };
  products.push(newP);
  res.json(newP);
});

app.listen(5000, ()=> console.log('Server running WITHOUT MongoDB on http://localhost:5000'));