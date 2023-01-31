import React, { useState } from 'react';

function PostEditor() {
  const [postContent, setPostContent] = useState('');

  const handleChange = (e) => {
    setPostContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the post here, for example using an API call
    // savePost(postContent);
  }

  return (
    <form className='post-editor' onSubmit={handleSubmit}>
      <textarea className='textarea' value={postContent} onChange={handleChange} />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostEditor;
