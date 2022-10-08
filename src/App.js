
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./Experience";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 return (
  <Router>
    <Navbar />
   <main>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/experience" element={<Experience/>} />
     <Route path="/projects" element={<Projects/>} />
    </Routes>
   </main>
  </Router>
 );
 /* return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  ); */
}

export default App;
