const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const book = booksData.find(b => b.id == id);

if (!book) {
    document.getElementById("book-details").textContent = "Book not found.";
} else {

    const bookImgCont = document.querySelector(".product-slide-row.wow.animate__fadeInUp.wow-animated");
    const colImg = document.createElement("div");
    colImg.classList.add("product-big-img");
    const imgCont = document.createElement("div");
    imgCont.classList.add("img");
    imgCont.innerHTML = `<img src="${book.coverImage}" alt="Product Image">`
    colImg.appendChild(imgCont);
    bookImgCont.appendChild(colImg);

    const bookAbout = document.querySelector(".product-about");
    const productRating = document.createElement("div");
    productRating.classList.add("product-rating");
    const rating = document.createElement("div");
    rating.classList.add("star-rating");
    rating.innerHTML = `
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span class="product-rating__total">Review (${book.ratingsCount})</span>
  `;
  productRating.appendChild(rating);

  const title = document.createElement("h2");
  title.classList.add("product-title");
  title.innerHTML = `<a href="shop.html">${book.title}</a>`;

    const author = document.createElement("span");
  author.classList.add("product-author");
  author.innerHTML = `<strong>By:</strong> <span> ${book.authors}</span>`;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
    productPrice.innerHTML = `${parseFloat(book.price).toFixed(2)}`;

  const text = document.createElement("p");
  text.classList.add("text");
  text.innerHTML = `${book.description}`;

  const productInStock = document.createElement("span");
  productInStock.classList.add("product-instock");
  productInStock.innerHTML = `<p>Availability:</p><span><i class="fas fa-check-square"></i>In Stock</span>`;



const actions = document.createElement("div");
actions.className = "actions";


const quantity = document.createElement("div");
quantity.className = "quantity";

const quantityField = document.createElement("div");
quantityField.className = "quantity__field quantity-container";

const quantityButtons = document.createElement("div");
quantityButtons.className = "quantity__buttons";


const plusBtn = document.createElement("button");
plusBtn.className = "quantity-plus qty-btn";
plusBtn.innerHTML = `<i class="fal fa-plus"></i>`;


const qtyInput = document.createElement("input");
qtyInput.type = "number";
qtyInput.id = "quantity";
qtyInput.className = "qty-input";
qtyInput.step = "1";
qtyInput.min = "1";
qtyInput.max = "100";
qtyInput.name = "quantity";
qtyInput.value = "01";
qtyInput.title = "Qty";


const minusBtn = document.createElement("button");
minusBtn.className = "quantity-minus qty-btn";
minusBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;


quantityButtons.appendChild(plusBtn);
quantityButtons.appendChild(qtyInput);
quantityButtons.appendChild(minusBtn);

quantityField.appendChild(quantityButtons);
quantity.appendChild(quantityField);

actions.appendChild(quantity);


let cartLink = document.createElement("button");
cartLink.dataset.id = book.id;
// cartLink.href = "cart.html";
cartLink.className = "vs-btn cart book-detail";
cartLink.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>Add to Cart`;
actions.appendChild(cartLink);


const wishlistLink = document.createElement("a");
wishlistLink.href = "wishlist.html";
wishlistLink.className = "icon-btn";
wishlistLink.innerHTML = `<i class="far fa-heart"></i>`;
actions.appendChild(wishlistLink);

// =====================================================================
const meta = document.createElement("div");
meta.className = "product_meta";

const metaTitle = document.createElement("h4");
metaTitle.className = "h5";
metaTitle.textContent = "Information:";
meta.appendChild(metaTitle);


const skuWrapper = document.createElement("span");
skuWrapper.className = "sku_wrapper";

const skuP = document.createElement("p");
skuP.innerHTML = `SKU:`;
const skuSpan = document.createElement("span");
skuSpan.className = "sku";
skuSpan.innerHTML = `${book.id}`;

skuWrapper.appendChild(skuP);
skuWrapper.appendChild(skuSpan);
meta.appendChild(skuWrapper);


const postedIn = document.createElement("span");
postedIn.className = "posted_in";

const catP = document.createElement("p");
catP.textContent = "Category:";
const catA = document.createElement("a");
catA.href = "#";
catA.rel = "tag";
catA.textContent =book.category;

postedIn.appendChild(catP);
postedIn.appendChild(catA);
meta.appendChild(postedIn);


const tagWrapper = document.createElement("span");
const tagP = document.createElement("p");
tagP.innerHTML = `Tags: ${book.tags.join(", ")}`;



tagWrapper.appendChild(tagP);

meta.appendChild(tagWrapper);

bookAbout.append(productRating,title,author,productPrice,productInStock,actions,meta);

// ======================================================================================

const wrapper = document.querySelector(".product-description");

wrapper.innerHTML = `
  <div class="product-description__tab">
    <ul class="nav nav-pills" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#desc-tab" type="button" role="tab">Description</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#reviews-tab" type="button" role="tab">Reviews (03)</button>
      </li>
    </ul>
  </div>

  <div class="tab-content">

    <!-- Description -->
    <div class="tab-pane fade active show" id="desc-tab" role="tabpanel">
      <div class="description">
        <p class="text">${book.description}</p>

        <div class="product_meta">
          <span class="sku_wrapper">
            <p>Category</p>
            <span class="sku">${book.category}</span>
          </span>

          <span class="posted_in">
            <p>Author</p> <span>${book.authors}</span>
          </span>

          <span>
            <p>Pages</p> <span>${book.pageCount}</span>
          </span>

          <span>
            <p>Tags</p>
            <span>${book.tags.join(", ")}</span>
          </span>

          <span>
            <p>Rating</p>
            <span>${book.averageRating} / 5 (${book.ratingsCount})</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Reviews -->
    <div class="tab-pane fade" id="reviews-tab" role="tabpanel">
      <div class="woocommerce-reviews">

        <div class="vs-comments-wrap">
          <ul class="comment-list">
            <li class="review vs-comment-item">
              <div class="vs-post-comment">
                <div class="comment-avater">
                  <img src="./assets/img/r-1-1.jpg" alt="Comment Author">
                </div>
                <div class="comment-content">
                  <div class="comment-content__header">
                    <div class="review-rating">
                      <div class="star-rating" role="img">
                        <span></span>
                      </div>
                    </div>
                    <h4 class="name h4">Crish Thomas</h4>
                  </div>
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  </p>
                  <span class="commented-on">Published 1 day ago</span>
                </div>
              </div>
            </li>

            <li class="review vs-comment-item">
              <div class="vs-post-comment">
                <div class="comment-avater">
                  <img src="./assets/img/r-1-2.jpg" alt="Comment Author">
                </div>
                <div class="comment-content">
                  <div class="comment-content__header">
                    <div class="review-rating">
                      <div class="star-rating" role="img">
                        <span></span>
                      </div>
                    </div>
                    <h4 class="name h4">Mark Jackson</h4>
                  </div>
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span class="commented-on">Published 2 days ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
`;
}


document.querySelector(".page-link-breadcrum").innerHTML = `${book.title}`;
