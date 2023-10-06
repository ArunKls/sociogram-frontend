import { Web3Storage } from "web3.storage";
import { BASE_URL, COOKIES, WEB3 } from "../constants/constants";

const addPost = async (data) => {
  let files = [];
  // console.log("DAta",data)
  files.push(data["file"]);
  console.log("files", files);
  let cid = await storeFiles(files);
  console.log("CIDS", cid);
  const response = await fetch(BASE_URL + "/post", {
    method: "POST",
    body: JSON.stringify({
      description: data["description"],
      files: [cid],
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + COOKIES.get("access_token"),
    },
  });
  const data1 = await response.json();
  // postId = data1['postID']
  console.log(data1);
};

function getAccessToken() {
  return WEB3;
}

function makeStorageClient() {
  console.log("Token", { token: getAccessToken() });
  return new Web3Storage({ token: getAccessToken() });
}

async function storeFiles(files) {
  const client = makeStorageClient();
  console.log("client", client);
  console.log(files, typeof files);
  const cid = await client.put(files[0]);
  console.log("stored files with cid:", cid);
  return cid;
}

export default addPost;
