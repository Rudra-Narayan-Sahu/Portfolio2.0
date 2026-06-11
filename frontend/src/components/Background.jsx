import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useBackgroundTheme } from '../contexts/BackgroundContext';

const Particles = ({ color }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const particleCount = isMobile ? 15 : 40;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 10,
            xOffset: (Math.random() - 0.5) * 50
        }));
        setParticles(newParticles);
    }, [isMobile]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        backgroundColor: color,
                        y: ['0%', '-100%'],
                        x: ['0%', `${p.xOffset}%`],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        backgroundColor: { duration: 2, ease: "easeInOut" },
                        y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                        x: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                        opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                    }}
                />
            ))}
        </div>
    );
};

export default function Background() {
    const { currentColor } = useBackgroundTheme();

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F0D]">
            {/* Layer 2: Animated Gradient Orbs */}
            <motion.div
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] rounded-full blur-[130px] sm:blur-[150px] opacity-25"
                animate={{
                    backgroundColor: currentColor,
                    x: [0, -150, 50, 0],
                    y: [0, 150, -50, 0],
                }}
                transition={{
                    backgroundColor: { duration: 2, ease: "easeInOut" },
                    x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            {/* Layer 3: Grid Pattern */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
                    [background-size:50px_50px]
                "
            />

            {/* Layer 4: Floating Particles */}
            <Particles color={currentColor} />
        </div>
    );
}