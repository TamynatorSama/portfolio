import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Contacts from "./paths/contact";
import Home from "./paths/home";
import Projects from "./paths/projects";
import About from "./paths/about";
import "./App.css"
export default function App(){



  return(
    <main className="app">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contacts />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
    </main>
  )
}