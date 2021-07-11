window.addEventListener("load", () => {

  const container = document.getElementById('article-container');

  const createPost = (post) => {
    // ? template stings
    return `
      <article class="post">
        <div class="post-header">
          <h3>${post.id} - ${post.title}</h3>
        </div>
        <div class="post-content">
          <p>${post.body}</p>
        </div>
      </article>
    `;
  }
  // Promise: then | catch
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {

      json.forEach((post) => {
        const html = createPost(post);
        container.insertAdjacentHTML('beforeend', html);
      });
    });
});
