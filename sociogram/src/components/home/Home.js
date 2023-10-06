import React, { useState } from "react";
// import "../components/home/Home.css"
import signUpManager from "../../managers/signUpManager";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, SetAge] = useState(0);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleAge = (e) => {
    SetAge(e.target.value);
  };
  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      age: age,
    };
    const response = signUpManager(data);
    if (response.status === 200) {
      prompt("created");
    } else {
      console.log("signup failed");
    }

    console.log("enter");
  };

  return (
    <div className="container">
      <div className="image-container">
        {/* Display your image here */}
        <img src="sociogram/public/logo512.png" />
      </div>
      <div className="form-container">
        <form>
          <div>
            <label className="label">Name</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />
          </div>
          <div>
            <label>Age</label>
            <input
              onChange={handleAge}
              className="input"
              value={age}
              type="number"
            />
          </div>
          <div>
            <label>password</label>
            <input
              onChange={handlepassword}
              className="input"
              value={password}
              type="password"
            />
          </div>
          <div>
            <label>Confirm password</label>
            <input
              onChange={handleConfirmPassword}
              className="input"
              value={confirmPassword}
              type="password"
            />
          </div>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
// import React, { useState } from 'react';
// import './Home.css';  // Import your CSS file for styling

// const Home = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [age, setAge] = useState(0);

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleAge = (e) => {
//     setAge(e.target.value);
//   };

//   const handleSubmit = () => {
//     console.log("Submit button clicked");
//   };

//   return (
//     <div className="container">
//       <div className="image-container">
//         {/* Display your image here */}
//         <img src="sociogram/public/logo512.png" />
//       </div>
//       <div className="form-container">
//         <form>
//             <table>
//           <div className='form-row'>
//             <tr>
//             <td><label className="label">Name</label></td>
//             <td><input onChange={handleName} className="input" value={name} type="text" /></td>
//             </tr>
//           </div>
//           <div className='form-row'>
//             <tr>
//             <td><label className="label">Email</label></td>
//             <td><input onChange={handleEmail} className="input" value={name} type="email" /></td>
//             </tr>
//           </div>
//           <div className='form-row'>
//             <tr>
//             <td><label className="label">Age</label></td>
//             <td><input onChange={handleAge} className="input" value={name} type="number" /></td>
//             </tr>
//           </div>
//           <div className='form-row'>
//             <tr>
//             <td><label className="label">Password</label></td>
//             <td><input onChange={handlePassword} className="input" value={name} type="password" /></td>
//             </tr>
//           </div>
//           <div className='form-row'>
//             <tr>
//             <td><label className="label">confirmPassword</label></td>
//             <td><input onChange={handleConfirmPassword} className="input" value={name} type="password" /></td>
//             </tr>
//           </div>
//           </table>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;
