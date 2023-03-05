// import React, { useState } from 'react';
// import { Picker } from 'emoji-mart';
// import '../css/emoji-mart/emoji-mart.css';

// function PostEditor() {
//   const [postContent, setPostContent] = useState('# Problem Description\n\n# Acceptance Criteria\n\n# Technical Details');
//   const [image, setImage] = useState(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleChange = (e) => {
//     setPostContent(e.target.value);
//   }

//   const handleImageChange = (e) => {
//     setImage(URL.createObjectURL(e.target.files[0]));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save the post here, for example using an API call
//     // savePost(postContent, image);
//   }

//   return (
//     <form className='post-editor'>
//       <div className='textcontainer'>
//         <textarea className='textarea' value={postContent} onChange={handleChange} />
//         <div className='actions'>
//           <input type="file" id="image" onChange={handleImageChange} />
//            <label htmlFor="image" className="image-upload">
//             <i className="fas fa-image"></i>
//           </label>
//           {image && (
//         <img src={image} alt="Uploaded" />
//       )}
//       <button type="submit">Post</button>
//         </div>
       
//       </div>
      
//     </form>
//   );
// }

// export default PostEditor;
