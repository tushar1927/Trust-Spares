const API_URL = "https://trust-spares-backend.vercel.app";

// Products aanayla
async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("API Error:", err);
  }
}

// Saglya page var use karu shakto
console.log("API Connected to:", API_URL);