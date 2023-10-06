import { Web3Storage } from "web3.storage";
import {
  BASE_URL,
  COOKIES,
  WEB3,
  GOOGLE_DRIVE_API_KEY,
} from "../constants/constants";

import axios from "axios";

const addPost = async (data) => {
  let files = [];
  // console.log("DAta",data)
  files.push(data["file"]);
  console.log("files", files[0]);
  let uploadLinks = await storeFiles(files[0]);
  // const response = await fetch(BASE_URL + "/post", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     description: data["description"],
  //     files: uploadLinks,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     Authorization: "Bearer " + COOKIES.get("access_token"),
  //   },
  // });
  // const data1 = await response.json();
  // postId = data1['postID']
  console.log(uploadLinks);
};

async function storeFiles(files) {
  const responses = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // Create a new Request object
    const request = new Request(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=media",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Length": file.size,
          Authorization: `Bearer ${GOOGLE_DRIVE_API_KEY}`,
        },
        body: formData,
      }
    );
    try {
      let response = fetch(request);
      return response;
    } catch (error) {
      return error;
    }
  });

  await Promise.resolve(responses);

  return responses;
}

export default addPost;
