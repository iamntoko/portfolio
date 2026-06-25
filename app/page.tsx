import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" className="wrap">
        <Hero />
      </main>
    </>
  );
}

