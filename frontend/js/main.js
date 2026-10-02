const API_URL = "https://trust-spares-backend.vercel.app";

// 1. Sagale products aan
async function loadProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    const products = await res.json();
    console.log(products);
    
    // jithhe products dakhvayche tithe
    const container = document.getElementById("product-list") || document.getElementById("products");
    if (container) {
      container.innerHTML = products.map(p => `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${p.name}</h3>
          <p>${p.company} - ${p.category}</p>
          <p>Price: ₹${p.price} | Stock: ${p.stock}</p>
        </div>
      `).join('');
    }
  } catch (e) {
    console.error("API fail", e);
  }
}

// 2. Page load zalyavar auto chalav
loadProducts();