import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Heading from "./components/sections/Heading";
import Education from "./components/sections/Education";
import Experience from "./data/Experience";
import Project from "./data/Projects";
import Stack from "./components/sections/Stack";
import Certifications from "./data/Certifications";
import Github from "./components/sections/Github";
import Footer from "./components/layout/Footer";
import Stacks from "./Stacks";
import Experiences from "./Experiences";
import Certificates from "./Certificates";
import Projects from "./Projects";
import SplashScreen from "./components/layout/SplashScreen";
import Services from "./Services";
import Contacts from "./Contacts";

function Home() {
  return (
    <>
      <Heading />
      <Experience />
      <Project />
      <Stack />
      <Education />
      <Certifications />
      <Github />
    </>
  );
}

function App() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <div className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/certificates" element={<Certificates />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
