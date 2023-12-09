import "./App.css";
import Signup from "./Components/Signup";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path ="/" element = {<h1>Products Page</h1>}></Route>
          <Route path ="/add" element = {<h1>Add products Page</h1>}></Route>
          <Route path ="/update" element = {<h1>Update products Page</h1>}></Route>
          <Route path ="/logout" element = {<h1>Logout Page</h1>}></Route>
          <Route path ="/profile" element = {<h1>Profile Page</h1>}></Route>
          <Route path ="/signup" element = {<Signup/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
