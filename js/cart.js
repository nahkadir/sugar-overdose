let cart = [];

function addToCart(productId) {
  let existingItem = cart.find(function (item) {
    return item.productId === productId;
  });

  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ productId: productId, qty: 1 });
  }

  renderCart();
}

function renderCart() {
  let cartItems = document.getElementById("cartItems");
  let cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="text-center text-brown py-10">
        <div class="text-4xl mb-3">🛒</div>
        <div class="font-semibold">Your cart is empty</div>
        <div class="text-sm mt-1">Add some delicious items!</div>
      </div>
    `;
    cartTotal.textContent = "PKR 0";
    return;
  }

  let total = 0;
  let html = cart
    .map(function (item) {
      let product = products.find(function (p) {
        return p.id === item.productId;
      });
      total += product.price * item.qty;
      return `<div class="flex items-center gap-5 pb-6 border-b border-border">
          <div>
            <img
              class="w-12 h-12 rounded-lg object-cover"
              src="${product.image}"
              alt="${product.name}"
            />
          </div>
          <div class="flex-1">
            <div class="text-sm font-semibold text-text-main">
              ${product.name}
            </div>
            <div class="text-sm text-crimson font-bold">${product.price * item.qty}</div>
          </div>
          <div class="flex gap-4 items-center">
            <button onclick="changeQty(${item.productId}, -1)" class="bg-choco/10 rounded-md p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <div>${item.qty}</div>
            <button onclick="changeQty(${item.productId}, 1)" class="bg-choco/10 rounded-md p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>`;
    })
    .join("");

  cartItems.innerHTML = html;
  cartTotal.textContent = "PKR " + total;
}

function changeQty(productId, d) {
  let item = cart.find(function (i) {
    return i.productId === productId;
  });

  if (item) {
    item.qty += d;
    if (item.qty <= 0) {
      cart = cart.filter(function (i) {
        return i.productId !== productId;
      });
    }
  }
  renderCart();
}

function toggleCart() {
  let cartPanel = document.getElementById("cartPanel");
  let cartOverlay = document.getElementById("cartOverlay");

  cartPanel.classList.toggle("translate-x-full");
  cartPanel.classList.toggle("translate-x-0");
  cartOverlay.classList.toggle("hidden");
}

document.getElementById("cartNav").addEventListener("click", toggleCart);
document.getElementById("cartOverlay").addEventListener("click", toggleCart);
document.getElementById("closeCart").addEventListener("click", toggleCart);

function openCheckout() {
  toggleCart();

  let summary = document.getElementById("orderSummary");
  let total = 0;
  let html = `<div class="text-brown tracking-tight">ORDER SUMMARY</div>`;

  cart.forEach(function (item) {
    let product = products.find(function (p) {
      return p.id === item.productId;
    });

    total += product.price * item.qty;
    html += `<div class="flex justify-between text-choco">
            <div>${product.name} x ${item.qty}</div>
            <div>${product.price * item.qty}</div>
          </div>`;
  });

  html += ` <div class="flex justify-between text-crimson">
            <div>TOTAL</div>
            <div>PKR ${total}</div>
          </div>`;

  summary.innerHTML = html;

  document.getElementById("checkoutOverlay").classList.remove("hidden");
  document.getElementById("checkoutModal").classList.remove("hidden");
}

function closeCheckout() {
  document.getElementById("checkoutOverlay").classList.add("hidden");
  document.getElementById("checkoutModal").classList.add("hidden");
}

document.getElementById("checkout").addEventListener("click", openCheckout);
document
  .getElementById("closeCheckout")
  .addEventListener("click", closeCheckout);
