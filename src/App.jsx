import { useState } from "react";
import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
