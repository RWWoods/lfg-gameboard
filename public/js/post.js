const newPostHandler = async (event) => {
    event.preventDefault();

    const postBody = document.querySelector('#new-post-entry-field').value.trim();

    if (postBody) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ postBody }),
            headers: {
                'Content-Type': 'application/json',
              },
        });

        if (response.ok) {
            document.location.replace('/games');
          } else {
            alert('Failed to create forum post');
          }
    }
};

const newCommentHandler = async (event) => {
    event.preventDefault();

    const commentBody = document.querySelector('#new-comment-entry-field').value.trim();

    if (commentBody) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ commentBody }),
            headers: {
                'Content-Type': 'application/json',
              },
        });

        if (response.ok) {
            document.location.replace('/games');
          } else {
            alert('Failed to create forum post');
          }
    }
};

document.querySelector('#create-post-button').addEventListener('submit', newPostHandler);
document.querySelector('#create-comment-button').addEventListener('submit', newPostHandler);