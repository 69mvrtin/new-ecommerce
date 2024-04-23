// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    const productsSection = document.getElementById('products');
  
    // Fetch products from an API or a local array
    const products = [
      { id: 1, name: 'Product 1', price: '$100' },
      { id: 2, name: 'Product 2', price: '$200' },
      // Add more products as needed
    ];
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
      productDiv.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = product.price;
      productDiv.appendChild(productPrice);
  
      productsSection.appendChild(productDiv);
    });
  });




  