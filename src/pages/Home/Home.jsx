import Heading from "./sections/Heading";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Github from "./sections/Github";

function Home() {
  return (
    <>
      <Heading />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Certifications />
      <Github />
    </>
  );
}

export default Home;
