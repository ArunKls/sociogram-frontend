import React, { useState } from "react";
import addPost from "../managers/postManager";

const Post = () => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data= {
        "description":description,
        "file":selectedFile
    }
    const response = addPost(data)
    if(response.status === 200){
        prompt("created")

    }else{
        console.log("signup failed")
    }

    console.log("enter")
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
          <input type="file" name="poster" onChange={handleFileChange} value ={selectedFile} accept="image/png, image/jpeg" />
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
