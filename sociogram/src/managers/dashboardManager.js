import { BASE_URL } from "../constants/constants";

const DashboardManager = ()=> {
    useEffect(() => {
        fetch('{BASE_URL}'/posts)
           .then((res) => res.json())
           .then((data) => {
              return data
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
}

export default DashboardManager;