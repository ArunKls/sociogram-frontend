import React, { useState } from "react";
import addPost from "../../managers/postManager";
import "./post.css"

const Post = () => {
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleUploads = (files) => {
    const uploaded = [...selectedFiles];
    files.some((file) => {
      uploaded.push(file);
    });
    setSelectedFiles(uploaded);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFileEvent = (e) => {
    const choosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploads(choosenFiles);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description: description,
      file: selectedFiles,
    };
    const response = await addPost(data);
    if (response.status === 200) {
      prompt("created");
    } else {
      console.log("signup failed");
    }

    console.log("enter");
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="custom-textarea-container">
          <textarea
            placeholder="Write your post here..."
            value={description}
            onChange={handleDescription}
            className="custom-textarea"
          />
          <label className="file-label">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileEvent}
              className="file-input"
            />
            Choose File
          </label>
        </div>
        {/* {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />} */}
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
      {/* <form>
        <div>
          <label>Post</label>
          <input
            onChange={handleDescription}
            className="input"
            value={description}
            type="text"
          />
        </div>
        <div>
          <input
            type="file"
            name="poster"
            onChange={handleFileEvent}
            accept="image/png, image/jpeg"
            multiple
          />
        </div> */}
        {/* <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button> */}
      {/* </form> */}
    </div>
  );
};

export default Post;
