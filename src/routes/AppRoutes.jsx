import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Experiences from "@/pages/Experiences/Experiences";
import Stacks from "@/pages/Stacks/Stacks";
import Certificates from "@/pages/Certificates/Certificates";
import Projects from "@/pages/Projects/Projects";
import Services from "@/pages/Services/Services";
import Resources from "@/pages/Resources/Resources";
import Contacts from "@/pages/Contacts/Contacts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/stacks" element={<Stacks />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRoutes;
