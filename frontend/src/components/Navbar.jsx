import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    const navItems = [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${
                    scrolled
                        ? "bg-[#0B0F0D]/80 backdrop-blur-xl border-b border-white/5"
                        : "bg-transparent"
                }
            `}
        >
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between max-w-[1920px]">
                <motion.h1 
                    className="text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                >
                    Rudra<span className="text-theme-color">.</span>
                </motion.h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth
                            duration={500}
                            className="
                                cursor-pointer
                                text-[#B8C1BC]
                                hover:text-theme-color
                                transition duration-300
                                relative group
                            "
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-color group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}

                    <motion.button
                        className="
                            px-6 py-2.5
                            rounded-full
                            bg-theme-color
                            text-[#0B0F0D]
                            font-medium
                            flex items-center gap-2
                            hover:shadow-lg hover:shadow-theme-color/50
                            transition
                        "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={18} />
                        Resume
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-[#B8C1BC]"
                    onClick={() => setOpen(!open)}
                    whileTap={{ scale: 0.95 }}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#111715]/95 backdrop-blur-xl border-b border-white/5"
                >
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth
                                duration={500}
                                onClick={() => setOpen(false)}
                                className="
                                    cursor-pointer
                                    text-[#B8C1BC]
                                    hover:text-theme-color
                                    transition duration-300
                                    py-2
                                "
                            >
                                {item.name}
                            </Link>
                        ))}
                        <motion.button
                            className="
                                w-full mt-4 px-6 py-2.5
                                rounded-full
                                bg-theme-color
                                text-[#0B0F0D]
                                font-medium
                                flex items-center justify-center gap-2
                            "
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                            Resume
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}