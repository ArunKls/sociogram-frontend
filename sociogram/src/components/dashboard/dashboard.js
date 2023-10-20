import { useState, useEffect } from "react";
import { DashboardManager } from "../../managers/dashboardManager";

function Dashboard() {
  const [dashboard, setDashboard] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await DashboardManager();
      console.log("RESPONSE", response);
      if (response.status === 200) {
        setDashboard(response.posts);
      } else {
        setError("Error fetching data");
      }
    } catch (error) {
      console.log("ERROR", error);
      setError("An error occurred");
    }
  }

  useEffect(() => {
    console.log("INSIDE USE EFFECT");
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        dashboard.map((item) => (
          <div key={item.id}>
            <p>{item.description}</p>
            <p>
              <img src={item.files[0].perma_link} alt="Image" />
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
