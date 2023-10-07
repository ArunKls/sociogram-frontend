import React, { useState } from "react";
import addPost from "../../managers/postManager";

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
      <form>
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
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
