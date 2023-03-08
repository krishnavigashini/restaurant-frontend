// import './App.css';
// import Showdata from './Components/ViewDetails';
// import Signup from './Components/AddDetails';
// import Home from "./Pages/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './layout/Navbar';
// function App() {
//   return (
//     <div>
//     <Router>
//     <Navbar />
//     <Routes>
//     <Route exact path="/" element={<Home />} />
//     <Route exact path="/foodmenu" element={<Showdata />} />
//       <Route exact path="/adduser" element={<Signup />} />
    
      
//       </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./Pages/Home";
import Menu from "./page/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/foodmenu" element={<Menu />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
