
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 return (
  <Router>
    <Navbar />
   <main>
    <Routes>
     <Route exact path="/" element={<Home/>} />
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
