function getFavorites() {
  const favorites = localStorage.getItem('wishlistBooks');
  return favorites ? JSON.parse(favorites) : [];
}



function saveFavorites(favorites) {
  localStorage.setItem('wishlistBooks', JSON.stringify(favorites));
}

function isFavorite(bookId) {

  const favorites = getFavorites();
  return favorites.some(fav => fav.id === bookId);
}

function addToFavorites(bookId) {
  const favorites = getFavorites();

  if (!isFavorite(bookId)) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }) + ' ' + now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    favorites.push({
      id: bookId,
      addedAt: dateStr
    });

    saveFavorites(favorites);
    return true;
  }
  return false;
}

function removeFromFavorites(bookId) {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.id !== bookId);
  saveFavorites(favorites);
}


function getCart() {
  const cart = localStorage.getItem('cartBooks');
  return cart ? JSON.parse(cart) : [];

}

function saveCart(cart) {
  localStorage.setItem('cartBooks', JSON.stringify(cart));
  updateCartBadge();
}

function isInCart(bookId) {
  const cart = getCart();

  return cart.some(item => item.id === bookId);
}

function addToCart(bookId) {
  const cart = getCart();
  const book = booksData.find(b => b.id === bookId);

  if (!book) {
    return false;
  }

  const existingItem = cart.find(item => item.id === bookId);

  if (existingItem) {
    existingItem.amount += 1;
  } else {
    cart.push({
      id: bookId,
      amount: 1,
      price: parseFloat(book.price)
    });
  }

  saveCart(cart);
  return true;
}

function removeFromCart(bookId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== bookId);
  saveCart(cart);
}

function updateCartItemAmount(bookId, newAmount) {
  const cart = getCart();
  const item = cart.find(item => item.id === bookId);

  if (item) {
    if (newAmount <= 0) {
      removeFromCart(bookId);
    } else {
      item.amount = newAmount;
      saveCart(cart);
    }
  }
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  const badge = document.querySelector('.header-cart span.badgee');
  if (badge) {
    badge.textContent = totalItems;
  }
}


const shopCont = document.querySelector(".row.gy-30.mb-40");

function renderBooks() {
  if (!shopCont) return;

  shopCont.innerHTML = '';

  booksData.forEach(book => {
    const col = document.createElement("div");
    col.classList.add("col-xl-3", "col-lg-6", "col-md-4", "col-sm-6");

    const card = document.createElement("div");
    card.classList.add("product-style1", "wow", "animate__fadeInUp");
    card.dataset.id = book.id;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("product-img");

    const img = document.createElement("img");
    img.src = book.coverImage;
    img.alt = book.title;

    const btns = document.createElement("div");
    btns.classList.add("product-btns");

    const wishlist = document.createElement("a");
    wishlist.href = "#";
    wishlist.classList.add("icon-btn", "wishlist");
    const isInFavorites = isFavorite(book.id);
    wishlist.innerHTML = isInFavorites
      ? `<i class="fa-solid fa-heart"></i>`
      : `<i class="fa-regular fa-heart"></i>`;

    const cart = document.createElement("a");
    cart.href = "#";
    cart.classList.add("icon-btn", "cart");
    cart.dataset.bookId = book.id;
    cart.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>`;

    btns.append(wishlist, cart);
    imgContainer.append(img, btns);

    const content = document.createElement("div");
    content.classList.add("product-content");

    const rating = document.createElement("div");
    rating.classList.add("product-rating");
    rating.innerHTML = `
      <span class="star"><i class="fas fa-star"></i> ${book.averageRating.toFixed(1)}</span>
      <ul class="price-list">
        <li>$${parseFloat(book.price).toFixed(2)}</li>
      </ul>
    `;

    const author = document.createElement("span");
    author.classList.add("product-author");
    author.innerHTML = `<strong>By:</strong> ${book.authors}`;


    const title = document.createElement("h2");
    title.classList.add("product-title");
    const titleLink = document.createElement("a");
    titleLink.textContent = book.title;
    titleLink.href = "#";

    titleLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `book.html?id=${book.id}`;

    });
    title.appendChild(titleLink);

    content.append(rating, author, title);
    card.append(imgContainer, content);
    col.appendChild(card);
    shopCont.appendChild(col);
  });
}


document.addEventListener("click", (e) => {
  if (e.target.closest(".wishlist")) {
    e.preventDefault();

    const btn = e.target.closest(".wishlist");
    const postElement = btn.closest(".product-style1");
    const id = Number(postElement.dataset.id);

    if (isFavorite(id)) {
      removeFromFavorites(id);
      btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    } else {
      addToFavorites(id);
      btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }

    if (document.querySelector('.wishlist-area')) {
      renderWishlist();
    }
  }

  if (e.target.closest(".cart")) {
    e.preventDefault();

    const btn = e.target.closest(".cart");
    let id;

    const postElement = btn.closest(".product-style1");
    const wishlistRow = btn.closest("tr.wishlist_item");
    if (btn.classList.contains('book-detail')) {
      id = Number(btn.dataset.id);
    } else if (postElement) {
      id = Number(postElement.dataset.id);
    } else if (wishlistRow) {
      id = Number(wishlistRow.dataset.id);
    }

    if (id && addToCart(id)) {
      btn.classList.add('added');
      setTimeout(() => {
        btn.classList.remove('added');
      }, 1000);

      showNotification(`✓ Book added to cart!`);
    }
  }

  if (e.target.closest(".product-remove")) {
    const removeBtn = e.target.closest(".product-remove");
    const row = removeBtn.closest("tr.wishlist_item");

    if (row && row.dataset.id) {
      e.preventDefault();
      const bookId = Number(row.dataset.id);

      removeFromFavorites(bookId);
      renderWishlist();

      const bookCard = document.querySelector(`[data-id="${bookId}"]`);
      if (bookCard) {
        const heartIcon = bookCard.querySelector('.wishlist');
        if (heartIcon) {
          heartIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }
      }
    }
  }
});


function renderWishlist() {
  const wishlistTable = document.querySelector('.tinvwl-table-manage-list tbody');

  if (!wishlistTable) return;

  const favorites = getFavorites();
  wishlistTable.innerHTML = '';

  if (favorites.length === 0) {
    wishlistTable.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 40px;">
          <p style="font-size: 18px; color: #999;">Your wishlist is empty</p>
          <a href="shop.html" class="vs-btn" style="margin-top: 20px;">Browse Books</a>
        </td>
      </tr>
    `;
    return;
  }

  favorites.forEach(fav => {
    const book = booksData.find(b => b.id === fav.id);

    if (!book) return;

    const row = document.createElement('tr');
    row.classList.add('wishlist_item');
    row.dataset.id = book.id;

    row.innerHTML = `
      <td class="product-cb">
        <input type="checkbox" name="wishlist" value="${book.id}" title="Select for bulk action">
      </td>
      <td class="product-remove">
        <button type="button" title="Remove">
          <i class="fa-solid fa-x"></i>
        </button>
      </td>
      <td class="product-thumbnail">
        <a href="shop-details.html">
          <img src="${book.coverImage}" alt="${book.title}">
        </a>
      </td>
      <td class="product-name">
        <a href="shop-details.html">${book.title}</a>
      </td>
      <td class="product-price">
        <span class="woocommerce-Price-amount amount">
          <bdi><span class="woocommerce-Price-currencySymbol">$</span>${parseFloat(book.price).toFixed(2)}</bdi>
        </span>
      </td>
      <td class="product-date">
        <time class="entry-date">${fav.addedAt}</time>
      </td>
      <td class="product-stock">
        <p class="stock in-stock">
          <span><i class="fas fa-check"></i></span>
          <span class="tinvwl-txt">In stock</span>
        </p>
      </td>
      <td class="product-action">
        <button class="button vs-btn alt cart" data-book-id="${book.id}" title="Add to Cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="tinvwl-txt">Add to Cart</span>
        </button>
      </td>
    `;

    wishlistTable.appendChild(row);
  });
}


function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .cart.added {
    animation: pulse 0.5s ease;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;
document.head.appendChild(style);


function renderCart() {
  const cartTableBody = document.querySelector('.cart-table tbody');

  if (!cartTableBody) return;

  const cart = getCart();

  const rows = cartTableBody.querySelectorAll('tr:not(.actions-row)');
  rows.forEach(row => row.remove());

  if (cart.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="6" style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 60px; color: #ddd; margin-bottom: 20px;">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <p style="font-size: 18px; color: #999; margin-bottom: 20px;">Your cart is empty</p>
        <a href="shop.html" class="vs-btn">Start Shopping</a>
      </td>
    `;
    cartTableBody.insertBefore(emptyRow, cartTableBody.querySelector('.actions-row'));
    updateCartTotals();
    return;
  }

  cart.forEach(item => {
    const book = booksData.find(b => b.id === item.id);

    if (!book) return;

    const totalPrice = (item.price * item.amount).toFixed(2);

    const row = document.createElement('tr');
    row.classList.add('cart-item');
    row.dataset.id = book.id;

    row.innerHTML = `
      <td data-title="Product">
        <a class="cart-productimage" href="shop.html">
          <img width="100" height="95" src="${book.coverImage}" alt="${book.title}">
        </a>
      </td>
      <td data-title="Name">
        <a class="cart-productname" href="shop.html">${book.title}</a>
      </td>
      <td data-title="Price">
        <span class="amount"><bdi><span>$</span>${item.price.toFixed(2)}</bdi></span>
      </td>
      <td data-title="Quantity" class="qty">
        <div class="quantity style2">
          <div class="quantity-field quantity-container">
            <div class="quantity-buttons">
              <button class="quantity-plus qty-btn" data-book-id="${book.id}">
                <i class="fa-solid fa-plus"></i>
              </button>
              <input type="number" class="qty-input" step="1" min="1" max="100" 
                     value="${item.amount}" title="Qty" data-book-id="${book.id}">
              <button class="quantity-minus qty-btn" data-book-id="${book.id}">
                <i class="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      </td>
      <td data-title="Total">
        <span class="amount item-total"><bdi><span>$</span>${totalPrice}</bdi></span>
      </td>
      <td data-title="Remove">
        <a href="#" class="remove" data-book-id="${book.id}">
          <i class="fa-solid fa-trash-can"></i>
        </a>
      </td>
    `;

    const actionsRow = cartTableBody.querySelector('.actions-row');
    if (actionsRow) {
      cartTableBody.insertBefore(row, actionsRow);
    } else {
      cartTableBody.appendChild(row);
    }
  });

  updateCartTotals();
}

function updateCartTotals() {
  const cart = getCart();

  const subtotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.amount);
  }, 0);

  const subtotalElement = document.querySelector('.cart-totals tbody tr:first-child td:last-child .amount bdi');
  if (subtotalElement) {
    subtotalElement.innerHTML = `<span>$</span>${subtotal.toFixed(2)}`;
  }

  const totalElement = document.querySelector('.cart-totals tfoot .order-total td:last-child .amount bdi');
  if (totalElement) {
    totalElement.innerHTML = `<span>$</span>${subtotal.toFixed(2)}`;
  }
}

function setupCartEventHandlers() {
  const cartTable = document.querySelector('.cart-table');

  if (!cartTable) return;

  cartTable.addEventListener('click', (e) => {
    const target = e.target.closest('button, a');

    if (!target) return;

    const bookId = Number(target.dataset.bookId);

    if (target.classList.contains('quantity-plus')) {
      e.preventDefault();
      const cart = getCart();
      const item = cart.find(i => i.id === bookId);

      if (item) {
        item.amount += 1;
        saveCart(cart);
        renderCart();
      }
    }

    else if (target.classList.contains('quantity-minus')) {
      e.preventDefault();
      const cart = getCart();
      const item = cart.find(i => i.id === bookId);

      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
          saveCart(cart);
          renderCart();
        } else {
          if (confirm('Remove this book from cart?')) {
            removeFromCart(bookId);
            renderCart();
          }
        }
      }
    }

    else if (target.classList.contains('remove')) {
      e.preventDefault();

      if (confirm('Are you sure you want to remove this book from your cart?')) {
        removeFromCart(bookId);
        renderCart();
      }
    }
  });

  cartTable.addEventListener('change', (e) => {
    if (e.target.classList.contains('qty-input')) {
      const bookId = Number(e.target.dataset.bookId);
      const newAmount = parseInt(e.target.value);

      if (newAmount > 0) {
        const cart = getCart();
        const item = cart.find(i => i.id === bookId);

        if (item) {
          item.amount = newAmount;
          saveCart(cart);
          renderCart();
        }
      } else {
        e.target.value = 1;
      }
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  if (shopCont) {
    renderBooks();
  }

  if (document.querySelector('.wishlist-area')) {
    renderWishlist();
  }

  if (document.querySelector('.cart-table')) {
    renderCart();
    setupCartEventHandlers();
  }
});



