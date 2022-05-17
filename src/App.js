// import { Counter } from "./components/Counter";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import  {Nature}  from "./navBar/Nature";
import { Football } from "./navBar/Football";
import { Cars } from "./navBar/Cars";
import { Instagram } from "./navBar/Instagram";

import React from "react";


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<Nature/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/football' element={<Football/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
      </Routes>
      {/* <Counter /> */}
      {/* <inputReduce/> */}
    </Router>
  );
};
export default App;
