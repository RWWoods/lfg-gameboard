const newPostHandler = async (event) => {
  event.preventDefault();
console.log("here");
  const title = document.querySelector('#new-post-entry-field').value.trim();
  const body = document.querySelector('#new-post-title-field').value.trim();
  const created_at = "May 2, 2023 09:30:00";

  if (title && body && created_at) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, created_at }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {

      document.location.replace('/games');
    } else {
      alert('Failed to create forum post');
    }

  
  
}
else {
  console.log("help")
}
};

// const newCommentHandler = async (event) => {
//   event.preventDefault();

//   const commentBody = document.querySelector('#new-comment-entry-field').value.trim();

//   if (commentBody) {
//     const response = await fetch('/api/posts', {
//       method: 'POST',
//       body: JSON.stringify({ commentBody }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/games');
//     } else {
//       alert('Failed to create forum post');
//     }
//   }
// };

document.querySelector('#create-post-button').addEventListener('click', newPostHandler);
// document.querySelector('#create-comment-button').addEventListener('submit', newPostHandler);