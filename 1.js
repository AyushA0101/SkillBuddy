// Get references to elements
const usernameInput = document.getElementById('usernameInput');
const postInput = document.getElementById('postInput');
const imageInput = document.getElementById('imageInput');
const postButton = document.getElementById('postButton');
const feed = document.getElementById('feed');

// Event listener for the Post button
postButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const postText = postInput.value.trim();
  const imageFile = imageInput.files[0];

  // Validate input
  if (!username) {
    alert('Please enter your username.');
    return;
  }
  if (!postText && !imageFile) {
    alert('Please write something or upload an image to post.');
    return;
  }

  // Create a new post
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Add the username and text content
  postElement.innerHTML = `
    <div class="header">
      <span class="username">${username}</span> posted:
    </div>
    ${postText ? `<div class="content">${postText}</div>` : ''}
  `;

  // If an image is uploaded, add it to the post
  if (imageFile) {
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageFile);
    imageElement.alt = "Post Image";
    postElement.appendChild(imageElement);
  }

  // Add action buttons
  const actionsElement = document.createElement('div');
  actionsElement.classList.add('actions');
  actionsElement.innerHTML = `
    <span class="like">❤️ Like</span>
    <span class="comment">💬 Comment</span>
    <span class="share">➡️ Share</span>
  `;
  postElement.appendChild(actionsElement);

  // Add the new post to the feed
  feed.prepend(postElement);

  // Clear the input fields
  usernameInput.value = '';
  postInput.value = '';
  imageInput.value = '';
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