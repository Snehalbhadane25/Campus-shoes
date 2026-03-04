// ===== Add to Cart =====
function addToCart() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const price = params.get("price");
  const img = params.get("img");

  const product = { name, price, img };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart!`);
}

// ===== Add to Wishlist =====
function addToWishlist() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const price = params.get("price");
  const img = params.get("img");

  const product = { name, price, img };

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert(`${name} added to wishlist!`);
}

// ===== Display Cart Items =====
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  container.innerHTML = cart
    .map(
      (item, i) => `
    <div class="card mb-3 shadow-sm">
      <div class="row g-0">
        <div class="col-md-3">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.name}">
        </div>
        <div class="col-md-9 d-flex justify-content-between align-items-center">
          <div>
            <h5>${item.name}</h5>
            <p>₹${item.price}</p>
          </div>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    </div>`
    )
    .join("");
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// ===== Display Wishlist Items =====
function displayWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlist-items");

  if (wishlist.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  container.innerHTML = wishlist
    .map(
      (item, i) => `
    <div class="card mb-3 shadow-sm">
      <div class="row g-0">
        <div class="col-md-3">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.name}">
        </div>
        <div class="col-md-9 d-flex justify-content-between align-items-center">
          <div>
            <h5>${item.name}</h5>
            <p>₹${item.price}</p>
          </div>
          <button class="btn btn-danger btn-sm" onclick="removeFromWishlist(${i})">Remove</button>
        </div>
      </div>
    </div>`
    )
    .join("");
}

function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}
