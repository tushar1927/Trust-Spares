const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { _id: '1', name: 'Brake Pad', company: 'Hero', category: 'Brake', price: 350, stock: 10 },
  { _id: '2', name: 'Air Filter', company: 'Honda', category: 'Engine', price: 250, stock: 20 }
];

app.get('/', (req,res)=> res.send('Trust Spares Backend Running ✅'));
app.get('/api/products', (req,res)=> res.json(products));

app.post('/api/products', (req,res)=>{
  const newP = { _id: Date.now().toString(), ...req.body };
  products.push(newP);
  res.json(newP);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server on ${PORT}`));

module.exports = app;