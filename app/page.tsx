import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" className="wrap">
        <Hero />
        <Projects />
      </main>
    </>
  );
}

