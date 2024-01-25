import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./Experience";
import Projects from "./Projects";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
 return (
  <main style={{textAlign:"left", background:"#444444"}}>
    <Navbar />
   <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/experience" element={<Experience/>} />
     <Route path="/projects" element={<Projects/>} />
    </Routes>
   </BrowserRouter>
  </main>
 );
}

export default App;
