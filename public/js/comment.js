const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log("here");
  const commentBody = document.querySelector('#new-comment-entry-field').value.trim();

  if (commentBody) {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({ commentBody }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/games');
    } else {
      alert('Failed to create comment');
    }
  }
};

document.querySelector('#create-comment-button').addEventListener('click', newCommentHandler);