
//import {  BrowserRouter, Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Activities from "./pages/Activities";
import {Routes, Route } from 'react-router-dom';
/* import Tables from "./components/Tables"; */
export default function App1() {
  

  return (
    
  <Routes>
            <Route forceRefresh={true} path="/" element={<Layout/>}>
               <Route forceRefresh={true} index element = {<Home/>}></Route>
               <Route forceRefresh={true} path='/about' element= {<About/>}></Route>
               <Route forceRefresh={true} path='/services' element= {<Services/>}></Route>
               <Route forceRefresh={true} path='/activities' element= {<Activities/>}></Route>
            </Route>
      </Routes>

     );
}

 
