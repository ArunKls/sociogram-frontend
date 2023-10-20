import { BASE_URL } from "../constants/constants";
import { COOKIES } from "../constants/constants";

async function DashboardManager() {
  let headers = {
    Authorization: `Bearer ${COOKIES.get("access_token")}`,
    "Content-Type": "application/json",
  };
  let requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    let response = await fetch(`${BASE_URL}/dashboard-posts`, requestOptions);
    let data = await response.json();
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.log("ERROR INSIDE MANAGER", error);
    return { status: 404 };
  }
}

export { DashboardManager };
