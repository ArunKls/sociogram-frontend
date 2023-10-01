import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
         <Route path="/login" exact element={<Home />} />
      </Routes>
        
      {/* <Home /> */}
      {/* <Routes> */}
     
      {/* </Routes> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
