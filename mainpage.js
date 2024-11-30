/*document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.getElementById('post-input');
    const postButton = document.getElementById('post-btn');
    const postsContainer = document.getElementById('posts-container');

    // Add a new post
    postButton.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        if (postContent) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.textContent = postContent;
            postsContainer.prepend(postElement);
            postInput.value = ''; // Clear the input field
        } else {
            alert('Please write something before posting!');
        }
    }); */
    const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const feed = document.getElementById('feed');

// Event listener for the Post button
postButton.addEventListener('click', () => {
  const postText = postInput.value.trim();

  if (postText) {
    // Create a new post
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <div class="content">${postText}</div>
      <div class="actions">
        <span class="like">❤️ Like</span>
         
      </div>
    `;

    // Add the new post to the feed
    feed.prepend(postElement);

    // Clear the input field
    postInput.value = '';
  } else {
    alert('Please write something to post!');
  }
});

// Event delegation for actions
feed.addEventListener('click', (event) => {
  if (event.target.classList.contains('like')) {
    event.target.textContent = '❤️ Liked';
  } else if (event.target.classList.contains('comment')) {
    alert('Comment functionality is under development!');
  } else if (event.target.classList.contains('share')) {
    alert('Share functionality is under development!');
  }
});

    // Make trending items interactive
    const trendingItems = document.querySelectorAll('.trending ul li');
    trendingItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on: ${item.textContent}`);
        });
    });
;