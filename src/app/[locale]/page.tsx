import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

function App() {
  return (
    <>
      <Navbar sticky={true} />
      <Header />
      <About />
      <Container>
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
