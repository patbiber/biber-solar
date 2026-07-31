// shop.js
// Warenkorb-Logik für den Balkonkraftwerk-Shop.
// Reine Funktionen (kein DOM-Zugriff), damit sie ohne Browser testbar sind.
// Warenkorb-Format: { [productId]: quantity }

const CART_STORAGE_KEY = 'bkwShopCart';

function addToCart(cart, productId, quantity) {
  quantity = quantity || 1;
  const next = Object.assign({}, cart);
  next[productId] = (next[productId] || 0) + quantity;
  return next;
}

function setQuantity(cart, productId, quantity) {
  const next = Object.assign({}, cart);
  if (!quantity || quantity <= 0) {
    delete next[productId];
  } else {
    next[productId] = quantity;
  }
  return next;
}

function removeFromCart(cart, productId) {
  const next = Object.assign({}, cart);
  delete next[productId];
  return next;
}

function cartItemCount(cart) {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function calculateCartTotal(cart, products) {
  return Object.entries(cart).reduce((total, [productId, qty]) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return total;
    return total + product.priceChf * qty;
  }, 0);
}

function cartToLineItems(cart) {
  return Object.entries(cart).map(([id, quantity]) => ({ id, quantity }));
}

// DOM-Wiring nur im Browser ausführen
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    const cartList = document.getElementById('cart-list');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutStatus = document.getElementById('checkout-status');
    if (!grid) return;

    let products = [];
    let cart = loadCart();

    function loadCart() {
      try {
        return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || {};
      } catch (err) {
        return {};
      }
    }

    function saveCart() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }

    function renderProducts() {
      grid.innerHTML = products
        .map(
          (p) => `
        <article class="product-card" data-id="${p.id}">
          <div class="product-icon" aria-hidden="true">${p.icon || '☀️'}</div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p class="product-watt">${p.wattPeak} Wp</p>
          <p class="product-price">CHF ${p.priceChf.toFixed(2)}</p>
          <button type="button" class="cta add-to-cart" data-id="${p.id}">In den Warenkorb</button>
        </article>`
        )
        .join('');

      grid.querySelectorAll('.add-to-cart').forEach((btn) => {
        btn.addEventListener('click', () => {
          cart = addToCart(cart, btn.dataset.id, 1);
          saveCart();
          renderCart();
        });
      });
    }

    function renderCart() {
      const entries = Object.entries(cart);

      if (entries.length === 0) {
        cartList.innerHTML = '<p>Dein Warenkorb ist leer.</p>';
      } else {
        cartList.innerHTML = entries
          .map(([id, qty]) => {
            const product = products.find((p) => p.id === id);
            if (!product) return '';
            return `
          <div class="cart-row" data-id="${id}">
            <span class="cart-row-name">${product.name}</span>
            <input type="number" min="0" max="20" value="${qty}" class="cart-qty" data-id="${id}" aria-label="Menge ${product.name}">
            <span class="cart-row-price">CHF ${(product.priceChf * qty).toFixed(2)}</span>
            <button type="button" class="cart-remove" data-id="${id}" aria-label="${product.name} entfernen">✕</button>
          </div>`;
          })
          .join('');

        cartList.querySelectorAll('.cart-qty').forEach((input) => {
          input.addEventListener('change', () => {
            cart = setQuantity(cart, input.dataset.id, parseInt(input.value, 10) || 0);
            saveCart();
            renderCart();
          });
        });
        cartList.querySelectorAll('.cart-remove').forEach((btn) => {
          btn.addEventListener('click', () => {
            cart = removeFromCart(cart, btn.dataset.id);
            saveCart();
            renderCart();
          });
        });
      }

      cartCountEl.textContent = cartItemCount(cart);
      cartTotalEl.textContent = calculateCartTotal(cart, products).toFixed(2);
      checkoutBtn.disabled = entries.length === 0;
    }

    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        products = data;
        renderProducts();
        renderCart();
      })
      .catch(() => {
        grid.innerHTML = '<p>Produkte konnten nicht geladen werden. Bitte versuche es später erneut.</p>';
      });

    checkoutBtn.addEventListener('click', async () => {
      checkoutStatus.textContent = 'Weiterleitung zur Kasse …';
      checkoutBtn.disabled = true;
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cartToLineItems(cart) }),
        });
        if (!response.ok) throw new Error('Checkout fehlgeschlagen');
        const data = await response.json();
        window.location.href = data.url;
      } catch (err) {
        checkoutStatus.textContent =
          'Die Kasse ist gerade nicht erreichbar. Bitte versuche es später erneut oder schreib mir direkt: patrick@biber.solar';
        checkoutBtn.disabled = false;
      }
    });
  });
}

// Export für Node/Tests, ignoriert im Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addToCart,
    setQuantity,
    removeFromCart,
    cartItemCount,
    calculateCartTotal,
    cartToLineItems,
  };
}
