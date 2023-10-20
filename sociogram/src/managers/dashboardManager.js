import { BASE_URL } from "../constants/constants";
import { useEffect, useState } from "react";
import { COOKIES } from "../constants/constants";

function DashboardManager() {
  const [posts, setPosts] = useState([]);
  let headers = {
    Authorization: `Bearer ${COOKIES.get("access_token")}`,
    "Content-Type": "application/json",
  };
  let requestOptions = {
    method: "GET",
    headers: headers,
  };

  fetch(`${BASE_URL}/dashboard-posts`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA", data);
      return data;
    })
    .catch((err) => {
      console.log(err.message);
      return { status: 404 };
    });
}

export { DashboardManager };
