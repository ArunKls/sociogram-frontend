import { FILE_IO_API_KEY } from "../constants/constants";

const uploadFiles = async (files) => {
  console.log("FILES", files);
  let uploadLinks = await storeFiles(files);
  // console.log("UPLOAD LINKS", uploadLinks);

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
    // formdata.append("expires", expiresTime);
    // formdata.append("maxDownloads", 50);

    var requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formdata,
      // redirect: "follow",
    };
    try {
      const response = fetch("https://uguu.se/upload.php", requestOptions);
      console.log("DONE");
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

    console.log("DATA", data);
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

async function storeFilesFileIO(files) {
  const responses = files.map(async (file) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${FILE_IO_API_KEY}`);

    const expiresTime = new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000
    ).toISOString();

    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("expires", expiresTime);
    formdata.append("maxDownloads", 50);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = fetch("https://file.io/", requestOptions);
      console.log("DONE");
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

    console.log("DATA", data);
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
  console.log("DATA", data);
  const files = await uploadFiles(data.file);
  if (files.status != 200) {
    return files;
  }

  return files;
};

export default addPost;
