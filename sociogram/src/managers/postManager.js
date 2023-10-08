import { FILE_IO_API_KEY, COOKIES, BASE_URL } from "../constants/constants";

const uploadFiles = async (files) => {
  let uploadLinks = await storeFiles(files);
  return uploadLinks;
};

async function storeFiles(files) {
  const responses = files.map(async (file) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${FILE_IO_API_KEY}`);

    const expiresTime = new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000
    ).toISOString();

    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("expires", expiresTime);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = fetch("https://file.io/", requestOptions);
      return response;
    } catch (error) {
      console.log("ERROR", error);
      return { status: 500, message: error.toString() };
    }
  });

  const resolved = await Promise.all(responses);
  const links = [];

  for (const response of resolved) {
    const data = await response.json();

    if (data.status === 200) {
      links.push({
        name: data.name,
        type: data.mimeType,
        key: data.key,
      });
    } else {
      return { status: 500, message: "upload failed" };
    }
  }

  // Return the links array
  // console.log("LINKS", links);
  return { status: 200, media: links };
}

const addPost = async (data) => {
  const files = await uploadFiles(data.file);
  if (files.status != 200) {
    return files;
  }

  let headers = {
    Authorization: `Bearer ${COOKIES.get("access_token")}`,
    "Content-Type": "application/json",
  };

  let b = { description: data.description, media: files.media };

  let requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(b),
  };

  let response = await fetch(`${BASE_URL}/post`, requestOptions);

  if (response.status === 200) {
    alert("Post Added Successfully");
  } else {
    alert("Post Couldn't be added");
  }

  return files;
};

export default addPost;
