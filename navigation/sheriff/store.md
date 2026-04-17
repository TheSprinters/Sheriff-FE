---
layout: none
title: DSA Store
permalink: /sheriff/store
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DSA Store &mdash; Deputy Sheriffs' Association of San Diego County</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; scroll-padding-top: 72px; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #0b1a2e; color: #e2e8f0; line-height: 1.6; }
    a { color: #60a5fa; text-decoration: none; }

    /* Top bar */
    .topbar {
      position: sticky; top: 0; z-index: 1000;
      background: rgba(15,40,71,0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .topbar-inner {
      max-width: 1000px; margin: 0 auto; height: 58px;
      display: flex; align-items: center; justify-content: space-between; padding: 0 24px;
    }
    .topbar .logo { display: flex; align-items: center; gap: 10px; }
    .topbar .logo img { width: 34px; height: auto; }
    .topbar .logo-text { font-size: 0.88rem; font-weight: 700; color: #fff; }
    .topbar .logo-sub { font-size: 0.58rem; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }
    .back-btn {
      padding: 7px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
      background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3); color: #fbbf24;
      cursor: pointer; transition: all 0.2s;
    }
    .back-btn:hover { background: rgba(251,191,36,0.15); }

    /* Page content */
    .page { max-width: 1000px; margin: 0 auto; padding: 40px 24px 60px; }
    .page h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .page .lead { color: #7f8ea3; font-size: 1rem; margin-bottom: 32px; }
    .page h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.12); padding-bottom: 8px; margin: 36px 0 16px; }
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }

    /* Cart */
    .cart-header {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;
    }
    .cart-info {
      display: flex; align-items: center; gap: 12px;
    }
    .cart-icon {
      position: relative; cursor: pointer;
    }
    .cart-count {
      position: absolute; top: -8px; right: -8px;
      background: #ef4444; color: white; border-radius: 50%;
      width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 700;
    }
    .cart-total {
      font-size: 0.9rem; color: #fbbf24; font-weight: 600;
    }

    /* Category tabs */
    .category-tabs {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; margin-bottom: 32px; overflow-x: auto;
    }
    .category-tab {
      padding: 8px 16px; border: none; background: transparent; color: #94a3b8;
      font-size: 0.84rem; font-weight: 600; cursor: pointer; border-radius: 8px;
      transition: all 0.2s; white-space: nowrap;
    }
    .category-tab:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
    .category-tab.active {
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1));
      color: #fbbf24; box-shadow: inset 0 0 0 1px rgba(251,191,36,0.25);
    }

    /* Products grid */
    .products-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
      margin-bottom: 40px;
    }
    .product-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; overflow: hidden;
      transition: all 0.2s;
    }
    .product-card:hover {
      border-color: #fbbf24; transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .product-image {
      width: 100%; height: 200px; object-fit: cover; background: linear-gradient(135deg, #1e3352, #0f2040);
      display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #1e3352;
    }
    .product-badge {
      position: absolute; top: 12px; right: 12px;
      padding: 4px 10px; border-radius: 12px; font-size: 0.68rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .badge-new { background: rgba(52,211,153,0.12); color: #34d399; }
    .badge-sale { background: rgba(239,68,68,0.12); color: #ef4444; }
    .badge-limited { background: rgba(251,191,36,0.12); color: #fbbf24; }
    
    .product-content {
      padding: 20px;
    }
    .product-title {
      font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 8px; line-height: 1.4;
    }
    .product-desc {
      font-size: 0.84rem; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;
    }
    .product-price {
      font-size: 1.2rem; font-weight: 800; color: #fbbf24; margin-bottom: 12px;
    }
    .product-options {
      margin-bottom: 16px;
    }
    .size-selector {
      display: flex; gap: 6px; margin-bottom: 8px;
    }
    .size-option {
      padding: 6px 10px; background: rgba(22,42,70,0.6); border: 1px solid #1e3352;
      border-radius: 6px; color: #94a3b8; font-size: 0.8rem; cursor: pointer;
      transition: all 0.2s;
    }
    .size-option:hover { border-color: #fbbf24; color: #fbbf24; }
    .size-option.selected { background: rgba(251,191,36,0.15); border-color: #fbbf24; color: #fbbf24; }
    .quantity-selector {
      display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
    }
    .quantity-btn {
      width: 28px; height: 28px; background: rgba(22,42,70,0.6); border: 1px solid #1e3352;
      border-radius: 6px; color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .quantity-btn:hover { border-color: #fbbf24; color: #fbbf24; }
    .quantity-input {
      width: 50px; text-align: center; background: rgba(22,42,70,0.6); border: 1px solid #1e3352;
      border-radius: 6px; color: #e2e8f0; font-size: 0.9rem; padding: 4px;
    }
    .add-to-cart {
      width: 100%; padding: 10px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 8px; font-weight: 700; font-size: 0.9rem;
      cursor: pointer; transition: all 0.2s;
    }
    .add-to-cart:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

    /* Cart modal */
    .cart-modal {
      display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.8); z-index: 2000; align-items: center; justify-content: center; padding: 20px;
    }
    .cart-modal.open { display: flex; }
    .cart-content {
      background: #162a46; border: 1px solid #1e3352; border-radius: 16px; padding: 24px;
      max-width: 500px; width: 100%; max-height: 80vh; overflow-y: auto;
    }
    .cart-header-modal {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
    }
    .cart-title { font-size: 1.2rem; color: #fbbf24; font-weight: 700; }
    .cart-close { background: none; border: none; color: #64748b; font-size: 1.5rem; cursor: pointer; }
    .cart-close:hover { color: #ef4444; }
    .cart-items { margin-bottom: 20px; }
    .cart-item {
      display: flex; gap: 12px; padding: 12px; background: rgba(22,42,70,0.6); border-radius: 8px; margin-bottom: 8px;
    }
    .cart-item-image {
      width: 60px; height: 60px; background: #1e3352; border-radius: 8px; display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; color: #1e3352;
    }
    .cart-item-details {
      flex: 1;
    }
    .cart-item-title { font-size: 0.9rem; font-weight: 600; color: #fff; margin-bottom: 4px; }
    .cart-item-meta { font-size: 0.8rem; color: #64748b; margin-bottom: 4px; }
    .cart-item-price { font-size: 0.9rem; color: #fbbf24; font-weight: 600; }
    .cart-remove {
      padding: 4px 8px; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3);
      border-radius: 6px; color: #ef4444; font-size: 0.75rem; cursor: pointer;
    }
    .cart-remove:hover { background: rgba(239,68,68,0.2); }
    .cart-summary {
      border-top: 1px solid #1e3352; padding-top: 16px;
    }
    .cart-row {
      display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;
    }
    .cart-row.total {
      font-weight: 700; color: #fbbf24; font-size: 1rem; margin-top: 8px;
    }
    .checkout-btn {
      width: 100%; padding: 12px; background: linear-gradient(135deg,#10b981,#059669);
      color: white; border: none; border-radius: 10px; font-weight: 700; font-size: 0.9rem;
      cursor: pointer; margin-top: 16px; transition: all 0.2s;
    }
    .checkout-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16,185,129,0.35); }

    /* Responsive */
    @media (max-width: 700px) {
      .products-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
      .cart-header { flex-direction: column; gap: 16px; align-items: flex-start; }
    }
  </style>
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <a href="{{ site.baseurl }}/" class="logo" style="text-decoration:none">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </a>
    <a href="{{ site.baseurl }}/" class="back-btn">&#8592; Back to Portal</a>
  </div>
</div>

<div class="page">

<div class="cart-header">
  <h1>DSA Store</h1>
  <div class="cart-info">
    <div class="cart-icon" onclick="openCart()">
      &#128722;
      <div class="cart-count" id="cartCount">0</div>
    </div>
    <div class="cart-total" id="cartTotal">$0.00</div>
  </div>
</div>

<p class="lead">Show your DSA pride with official merchandise, apparel, and gear. All proceeds support member programs and initiatives.</p>

<!-- Category Tabs -->
<div class="category-tabs">
  <button class="category-tab active" onclick="filterProducts('all')">All Products</button>
  <button class="category-tab" onclick="filterProducts('apparel')">Apparel</button>
  <button class="category-tab" onclick="filterProducts('accessories')">Accessories</button>
  <button class="category-tab" onclick="filterProducts('gear')">Gear</button>
  <button class="category-tab" onclick="filterProducts('badges')">Badges & Patches</button>
</div>

<!-- Products Grid -->
<div class="products-grid" id="productsGrid">
  <!-- Products will be populated by JavaScript -->
</div>

</div>

<!-- Cart Modal -->
<div class="cart-modal" id="cartModal">
  <div class="cart-content">
    <div class="cart-header-modal">
      <h2 class="cart-title">Shopping Cart</h2>
      <button class="cart-close" onclick="closeCart()">&times;</button>
    </div>
    <div class="cart-items" id="cartItems">
      <!-- Cart items will be populated by JavaScript -->
    </div>
    <div class="cart-summary">
      <div class="cart-row">
        <span>Subtotal:</span>
        <span id="subtotal">$0.00</span>
      </div>
      <div class="cart-row">
        <span>Tax (8%):</span>
        <span id="tax">$0.00</span>
      </div>
      <div class="cart-row">
        <span>Shipping:</span>
        <span id="shipping">$0.00</span>
      </div>
      <div class="cart-row total">
        <span>Total:</span>
        <span id="finalTotal">$0.00</span>
      </div>
      <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    </div>
  </div>
</div>

<script>
// Sample products data (in real app, this would come from backend)
const products = [
  {
    id: 1,
    title: "DSA Polo Shirt",
    category: "apparel",
    price: 35.00,
    description: "Classic navy polo with embroidered DSA logo. Professional and comfortable.",
    badge: "new",
    icon: "&#128087;",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },
  {
    id: 2,
    title: "Tactical Duty Jacket",
    category: "apparel",
    price: 89.00,
    description: "Water-resistant jacket with DSA emblem. Perfect for duty wear.",
    badge: "sale",
    icon: "&#128085;",
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 3,
    title: "DSA Challenge Coin",
    category: "accessories",
    price: 15.00,
    description: "Collectible challenge coin featuring DSA seal and founding year.",
    badge: "limited",
    icon: "&#128142;",
    sizes: []
  },
  {
    id: 4,
    title: "Embroidered Ball Cap",
    category: "apparel",
    price: 25.00,
    description: "Adjustable baseball cap with raised DSA embroidery.",
    badge: null,
    icon: "&#128472;",
    sizes: ["One Size"]
  },
  {
    id: 5,
    title: "Leather Duty Belt",
    category: "gear",
    price: 120.00,
    description: "Premium leather duty belt with DSA buckle. Built to last.",
    badge: null,
    icon: "&#128092;",
    sizes: ["32", "34", "36", "38", "40", "42", "44"]
  },
  {
    id: 6,
    title: "DSA Morale Patch",
    category: "badges",
    price: 8.00,
    description: "Hook-and-loop morale patch for uniforms and gear.",
    badge: null,
    icon: "&#128169;",
    sizes: []
  },
];

let cart = [];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  updateCartDisplay();
});

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  let filteredProducts = products;
  
  if (currentCategory !== 'all') {
    filteredProducts = products.filter(product => product.category === currentCategory);
  }
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px;grid-column:1/-1">No products found in this category.</p>';
    return;
  }
  
  let html = '';
  filteredProducts.forEach(product => {
    const badgeHtml = product.badge ? `<div class="product-badge badge-${product.badge}">${product.badge}</div>` : '';
    const sizesHtml = product.sizes.length > 0 ? `
      <div class="product-options">
        <div class="size-selector">
          ${product.sizes.map(size => `<button class="size-option" onclick="selectSize(${product.id}, '${size}')">${size}</button>`).join('')}
        </div>
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">-</button>
          <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" max="10">
          <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
        </div>
      </div>
    ` : '';
    
    html += `
      <div class="product-card">
        <div class="product-image" style="position:relative">
          ${product.icon}
          ${badgeHtml}
        </div>
        <div class="product-content">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-price">$${product.price.toFixed(2)}</div>
          ${sizesHtml}
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
  
  productsGrid.innerHTML = html;
}

function filterProducts(category) {
  currentCategory = category;
  
  // Update active tab
  document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  renderProducts();
}

function selectSize(productId, size) {
  // Clear previous selection for this product
  document.querySelectorAll(`.product-card`).forEach(card => {
    const buttons = card.querySelectorAll('.size-option');
    buttons.forEach(btn => {
      if (btn.onclick.toString().includes(productId)) {
        btn.classList.toggle('selected', btn.textContent === size);
      }
    });
  });
}

function changeQuantity(productId, change) {
  const input = document.getElementById(`qty-${productId}`);
  const currentQty = parseInt(input.value);
  const newQty = Math.max(1, Math.min(10, currentQty + change));
  input.value = newQty;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  let selectedSize = 'N/A';
  if (product.sizes.length > 0) {
    const selectedButton = document.querySelector(`.size-option.selected`);
    if (!selectedButton) {
      alert('Please select a size before adding to cart.');
      return;
    }
    selectedSize = selectedButton.textContent;
  }
  
  const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
  
  // Check if item already in cart
  const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      title: product.title,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      icon: product.icon
    });
  }
  
  // Reset quantity selector
  document.getElementById(`qty-${productId}`).value = 1;
  
  updateCartDisplay();
  
  // Show confirmation
  alert(`${quantity} x ${product.title} added to cart!`);
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartCount.textContent = totalItems;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  
  updateCartModal();
}

function updateCartModal() {
  const cartItems = document.getElementById('cartItems');
  const subtotal = document.getElementById('subtotal');
  const tax = document.getElementById('tax');
  const shipping = document.getElementById('shipping');
  const finalTotal = document.getElementById('finalTotal');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center;color:#64748b;padding:20px">Your cart is empty.</p>';
    subtotal.textContent = '$0.00';
    tax.textContent = '$0.00';
    shipping.textContent = '$0.00';
    finalTotal.textContent = '$0.00';
    return;
  }
  
  let html = '';
  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div class="cart-item-image">${item.icon}</div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">Size: ${item.size} &bull; Qty: ${item.quantity}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
      </div>
    `;
  });
  
  cartItems.innerHTML = html;
  
  const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = subtotalAmount * 0.08;
  const shippingAmount = subtotalAmount > 50 ? 0 : 8.99;
  const totalAmount = subtotalAmount + taxAmount + shippingAmount;
  
  subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
  tax.textContent = `$${taxAmount.toFixed(2)}`;
  shipping.textContent = shippingAmount === 0 ? 'FREE' : `$${shippingAmount.toFixed(2)}`;
  finalTotal.textContent = `$${totalAmount.toFixed(2)}`;
}

function openCart() {
  document.getElementById('cartModal').classList.add('open');
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('open');
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  updateCartDisplay();
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = totalAmount * 0.08;
  const shippingAmount = totalAmount > 50 ? 0 : 8.99;
  const finalAmount = totalAmount + taxAmount + shippingAmount;
  
  alert(`Checkout functionality would be implemented here.\n\nOrder Total: $${finalAmount.toFixed(2)}\n\nIn a real implementation, this would connect to a payment processor and handle shipping information.`);
  
  // In a real app, this would proceed to actual checkout
  // For demo purposes, we'll clear the cart
  cart = [];
  updateCartDisplay();
  closeCart();
}

// Close cart when clicking outside
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeCart();
  }
});

/* ================================================================
   AUTO-FILL: Personalize store for logged-in member
   ================================================================ */
const API_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

fetch(`${API_URL}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(user => {
    const lead = document.querySelector('.page .lead');
    if (lead && user.name) {
      lead.textContent = `Welcome, ${user.name.split(' ')[0]}! Browse official DSA merchandise. Member discounts applied automatically at checkout.`;
    }
  })
  .catch(() => {});
</script>

</body>
</html>
