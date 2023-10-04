const loginManager = async (formData) => {
  const sparamdata = new URLSearchParams(formData);
  const response = await fetch("http://192.168.1.135:8000/signup", {
    method: "POST",
    body: formData,
    //   body: JSON.stringify({
    //         "username":formData['username'],
    //         "password":formData['password'],
    //         "grant_type":"password"
    //   }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data1 = await response.json();
  return data1;
};

export default loginManager;
