document.getElementById('content-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const text = document.getElementById('text').value;
  const image = document.getElementById('image').files[0];
  const imageUrl = document.getElementById('image-url').value;
  const video = document.getElementById('video').files[0];
  const videoUrl = document.getElementById('video-url').value;

  const post = document.createElement('div');
  post.className = 'post';

  let postContent = `<h3>${title}</h3><p>${text}</p>`;

  if (image) {
      postContent += `<img src="${URL.createObjectURL(image)}" alt="Post Image">`;
  } else if (imageUrl) {
      postContent += `<img src="${imageUrl}" alt="Post Image">`;
  }

  if (video) {
      postContent += `<video controls>
                          <source src="${URL.createObjectURL(video)}" type="${video.type}">
                          Your browser does not support the video tag.
                      </video>`;
  } else if (videoUrl) {
      postContent += `<video controls>
                          <source src="${videoUrl}" type="video/mp4">
                          Your browser does not support the video tag.
                      </video>`;
  }

  post.innerHTML = postContent;

  document.getElementById('blog-preview').appendChild(post);

  document.getElementById('content-form').reset();
});
