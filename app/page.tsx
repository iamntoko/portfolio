import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Background from "./components/Background";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" className="wrap">
        <Hero />
        <Projects />
        <About />
        <Background />
      </main>
    </>
  );
}

