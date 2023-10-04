import { BASE_URL } from '../../constants/constants';

const loginManager = async (data) => {
  const formData = new FormData();
  formData.append("username", data["username"]);
  formData.append("password", data["password"]);
  const d = new URLSearchParams(formData);
  const response = await fetch(BASE_URL+"/login", {
    method: "POST",
    body: d,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  });

  return response;
};

export default loginManager;
