const loginManager = async (data) => {
  const formData = new FormData();
  formData.append("username", data["username"]);
  formData.append("password", data["password"]);
  const d = new URLSearchParams(formData);
  const response = await fetch("http://192.168.1.135:8000/login", {
    method: "POST",
    body: d,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  });

  return response;
};

export default loginManager;
