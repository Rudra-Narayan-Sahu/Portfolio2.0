import Background from "./components/Background";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";

function App() {
    return (
        <>
            <Background />
            <ThemeSwitcher />
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <ChatAssistant />
        </>
    );
}

export default App;