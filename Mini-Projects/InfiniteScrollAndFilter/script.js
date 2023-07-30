const postsContainer = document.getElementById("posts-container");
const loading        = document.querySelector(".loader");

let total = 0;
let limit = 5;
let page  = 1;

  // Fetch posts from API
let PromiseToGetPosts = new Promise((resolve, reject) => {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

  // Show posts in DOM
let showPosts = () => {
  PromiseToGetPosts.then((data) => {
    renderPosts(data);
  }).catch((error) => {
    console.error(error);  // Handle any errors that occurred during data retrieval
  });
};

  // Create Posts HTML Elements
let createPostElement = (post) => {
  total += 1;
  return `<div class = "post">
      <div class = "number">${total}</div>
      <div class = "post-info">
        <h2  class = "post-title">${post.title}</h2>
        <p   class = "post-body">${post.body}</p>
      </div>
    </div>`;
};

  // Render Posts Elements To HTML
let renderPosts = (posts) => {
  const postsHTML = posts.map(createPostElement).join("");
  postsContainer.insertAdjacentHTML("beforeend", postsHTML);
};

  // Show loader & fetch more posts
let showLoading = () => {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
};

// Show initial posts
showPosts();
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) showLoading();
});

