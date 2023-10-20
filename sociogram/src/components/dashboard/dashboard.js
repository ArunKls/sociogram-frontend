import { useState, useEffect } from "react";
import { DashboardManager } from "../../managers/dashboardManager";

function Dashboard() {
  console.log("INSIDE DASHBOARD");
  const [dashboard, setDashboard] = useState([]);

  //   useEffect(() => {
  //     console.log("INSIDE USE EFFECT");
  //     const response = DashboardManager();
  //     if (response.status == 200) {
  //       setDashboard(response);
  //     } else {
  //       alert("error");
  //     }
  //   }, []);

  DashboardManager().then(function (response) {
    return (
      <div>
        {response.posts.map((item) => (
          <div>
            <p>{item.description}</p>
            <p>
              {" "}
              <img src={item.files[0].perma_link} />
            </p>
          </div>
        ))}
      </div>
    );
  });
}

export { Dashboard };
