const trendingProducts = document.querySelector(".trending-layout1 .row.g-4");
const bestSellingProducts = document.querySelector(".romance-layout1 .col-xl-8.col-lg-7 .row.g-4");
const TopBooksOfTheWeek = document.querySelector(".romance-layout1 .recent-post-wrap");
const TopCategories = document.querySelector(".categories-layout1 .row.gy-30.mb-40");
const filteredTrendingProducts = booksData.filter(book => book.trending);
const filteredBestSellingProducts = booksData.filter(book => book.bestSelling);
const filteredTopBooksOfTheWeek = booksData.filter(book => book.topBookOfTheWeek);
const filteredTopCategories = booksData.slice(0, 6);

const trendingCon = document.querySelector('body > section.trending-layout1.space  .row.g-4');
if (trendingCon) {
  trendingCon.innerHTML = '';
  filteredTrendingProducts.forEach(book => {

    const col = document.createElement("div");
    col.classList.add("col-xl-2", "col-md-4", "col-sm-6");


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
    trendingCon.appendChild(col);
  });
}

var bestSellingCont = document.querySelector('body > section.romance-layout1.space-top > div > div > div.col-xl-8.col-lg-7 > div.row.g-4');


if (bestSellingCont) {
  filteredBestSellingProducts.forEach(book => {

    const col = document.createElement("div");
    col.classList.add("col-xl-3", "col-lg-6", "col-md-4", "col-sm-6");

    
    // const col = document.createElement("div");
    // col.classList.add("col-xl-2", "col-md-4", "col-sm-6");


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
    bestSellingCont.appendChild(col);
  });
}

filteredTopBooksOfTheWeek.forEach(book => {

  const col = document.createElement("div");
  col.classList.add("recent-post");


  const imgCard = document.createElement("div");
  imgCard.classList.add("media-img");


  const imgContainer = document.createElement("a");

  const img = document.createElement("img");
  img.src = book.coverImage;
  imgContainer.appendChild(img);
  imgCard.appendChild(imgContainer)

  const mediaBody = document.createElement("div");
  mediaBody.classList.add("media-body");

  const author = document.createElement("span");
  author.classList.add("product-author");
  author.innerHTML = `<strong>By:</strong> ${book.authors}`;

  const postTitle = document.createElement("h4");
  postTitle.classList.add("post-title");
  const titleLink = document.createElement("a");
  titleLink.className = "text-inherit";
  titleLink.textContent = book.title;
  titleLink.href = "#";

  titleLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `book.html?id=${book.id}`;

  });
  postTitle.appendChild(titleLink);

  const priceList = document.createElement("ul");
  priceList.classList.add("price-list");
  priceList.innerHTML = `
      <li>$${parseFloat(book.price).toFixed(2)}</li>
  `;

  mediaBody.append(author, postTitle, priceList);
  col.append(imgCard, mediaBody);
  TopBooksOfTheWeek.prepend(col);
});


filteredTopCategories.forEach(book => {

  const col = document.createElement("div");
  col.classList.add("col-xl-4", "col-lg-6", "col-md-6");


  const card = document.createElement("div");
  card.classList.add("product-style1", "wow", "animate__fadeInUp", "wow-animated", "style2");


  const imgContainer = document.createElement("div");
  imgContainer.classList.add("product-img", "product-img-cat");

  const img = document.createElement("img");
  img.src = book.coverImage;

  const btns = document.createElement("div");
  btns.classList.add("product-btns");

  const wishlist = document.createElement("a");
  wishlist.href = "#";
  wishlist.classList.add("icon-btn", "wishlist");
  wishlist.innerHTML = `<i class="far fa-heart"></i>`;

  const cart = document.createElement("a");
  cart.href = "#";
  cart.classList.add("icon-btn", "cart");
  cart.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>`;

  btns.append(wishlist, cart);
  imgContainer.append(img, btns);


  const content = document.createElement("div");
  content.classList.add("product-content");

  const rating = document.createElement("div");
  rating.classList.add("star-rating");
  rating.innerHTML = `
   <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
  `;

  const author = document.createElement("span");
  author.classList.add("product-author");
  author.innerHTML = `<strong>By:</strong> ${book.authors}`;

  const title = document.createElement("h2");
  title.classList.add("product-title");

  const priceList = document.createElement("ul");
  priceList.className = "price-list";
  priceList.style = "display: block;";
  priceList.innerHTML = ` <li>$${parseFloat(book.price).toFixed(2)}</li>`;
  const titleLink = document.createElement("a");
  titleLink.className = "text-inherit";
  titleLink.textContent = book.title;
  titleLink.href = "#";

  titleLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `book.html?id=${book.id}`;

  });
  title.append(titleLink, priceList);

  const btnAddToCart = document.createElement("div");
  btnAddToCart.innerHTML = `<a class="vs-btn" href="cart.html">Add To Cart</a>`;

  content.append(rating, author, title, btnAddToCart);

  card.append(imgContainer, content);
  col.appendChild(card);
  TopCategories.prepend(col);
});

