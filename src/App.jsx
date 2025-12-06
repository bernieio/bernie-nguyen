import { Navbar } from './components';
import {
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Achievements,
  Contact
} from './sections';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden selection:bg-[#00eaff]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
