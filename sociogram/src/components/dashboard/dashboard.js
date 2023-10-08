import {useState} from "react"


const Dashboard=()=>{
    // const [dashboard,setDashboard] = useState([])

    let dashboard = [
        {
            "description":"adhada",
            "image":"https://s3.amazonaws.com/images.scanbuy/cmpv2/qxYsuUjc45uoiy2EMJp8Bq/images/sun.jpeg"
        },
        {
            "description":"adhada",
            "image":"https://s3.amazonaws.com/images.scanbuy/cmpv2/qxYsuUjc45uoiy2EMJp8Bq/images/sun.jpeg"
        }

    ]
    // const  response = DashboardManager()
    // if(response.status == 200){
    //     setDashboard(response)
    // }else{
    //     prompt("error");
    // }
    return(
        <div>
        {dashboard.map(item => (
            <div> 
               <p>{item.description}</p>
              <p> <img src = {item.image} /></p>
            </div>
          ))}
          </div>
    )

    
}

export default Dashboard