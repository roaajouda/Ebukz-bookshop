const selectCurrent = document.getElementById("selectCurrent");
if (selectCurrent) {
  const selectOptions = document.getElementById("selectOptions");
  const options = selectOptions.querySelectorAll("li");

  selectCurrent.addEventListener("click", () => {
    selectOptions.style.display =
      selectOptions.style.display === "block" ? "none" : "block";
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      selectCurrent.textContent = option.textContent;

      options.forEach(o => o.classList.remove("active"));

      option.classList.add("active");

      selectOptions.style.display = "none";
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      selectOptions.style.display = "none";
    }
  });
}

var posts = [
  {
    id: 1,
    img: "assets/img/blog/blog-img-1-1.jpg",
    day: "15",
    month: "may",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "This is a short description for post number one.",
    link: "blog-details.html",
    comments: 2,
    author: "Admin"
  },
  {
    id: 2,
    img: "assets/img/blog/blog-img-1-2.jpg",
    day: "16",
    month: "may",
    title: "Post number two lorem ipsum dolor.",
    description: "Another description for the second post on the blog.",
    link: "blog-details.html",
    comments: 5,
    author: "Admin"
  },
  {
    id: 3,
    img: "assets/img/blog/blog-img-1-3.jpg",
    day: "18",
    month: "may",
    title: "Third post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 1,
    author: "Admin"
  },
  {
    id: 4,
    img: "assets/img/blog/blog-img-1-4.jpg",
    day: "18",
    month: "may",
    title: "Fourth post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 2,
    author: "Admin"
  },
  {
    id: 5,
    img: "assets/img/blog/blog-img-1-5.jpg",
    day: "18",
    month: "may",
    title: "Fifth post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 4,
    author: "Admin"
  },
  {
    id: 6,
    img: "assets/img/blog/blog-img-1-6.jpg",
    day: "18",
    month: "may",
    title: "Sixth post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 4,
    author: "Admin"
  },
  {
    id: 7,
    img: "assets/img/blog/blog-img-1-7.jpg",
    day: "18",
    month: "may",
    title: "Seventh post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 2,
    author: "Admin"
  },
  {
    id: 8,
    img: "assets/img/blog/blog-img-1-8.jpg",
    day: "18",
    month: "may",
    title: "Fifth post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 8,
    author: "Admin"
  },
  {
    id: 9,
    img: "assets/img/blog/blog-img-1-9.jpg",
    day: "18",
    month: "may",
    title: "Ninth post lorem ipsum dolor sit amet.",
    description: "Some description text for post number three.",
    link: "blog-details.html",
    comments: 3,
    author: "Admin"
  },
];


const container = document.getElementById("posts-container");

posts.forEach(post => {
  container.innerHTML += `
    <div class="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp wow-animated" data-wow-delay="0.25s">

      <div class="blog-post" data-id="${post.id}">
        
        <div class="blog-img">
          <a href="${post.link}">
            <img class="blog-img-img" src="${post.img}" alt="Blog Image">
          </a>
          <div class="blog-date">
            <span class="day">
              <strong class="month">${post.day}</strong>${post.month}
            </span>
          </div>
        </div>

        <div class="blog-content">
          <div class="blog-meta">
            <a href="blog.html"><i class="fa-solid fa-user"></i>By ${post.author}</a>
            <a href="blog.html"><i class="fa-solid fa-comments"></i>${post.comments} Comments</a>
          </div>

          <h2 class="blog-title">
            <a href="${post.link}">${post.title}</a>
          </h2>

          <p class="blog-description">${post.description}</p>

          <div class="btn-area">
            <a class="btn" href="${post.link}">
              Read More<i class="fa-regular fa-arrow-right"></i>
            </a>

            <div class="social-media">
              <div class="member-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-behance"></i></a>
              </div>
              <span class="icon-btn"><i class="fas fa-share-alt"></i></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
});



