import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBackgroundTheme } from '../contexts/BackgroundContext';
import { Palette, X } from 'lucide-react';

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { themeMode, setThemeMode, THEMES } = useBackgroundTheme();
    const dropdownRef = useRef(null);

    const options = [
        { id: THEMES.green, label: 'Green', icon: '🟢' },
        { id: THEMES.orange, label: 'Orange', icon: '🟠' },
        { id: THEMES.blue, label: 'Blue', icon: '🔵' },
        { id: THEMES.red, label: 'Red', icon: '🔴' },
        { id: THEMES.aurora, label: 'Aurora (Auto)', icon: '✨' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 w-48 rounded-2xl bg-[#1A1F1C]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="p-2 space-y-1">
                            {options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setThemeMode(option.id);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                                        ${themeMode === option.id 
                                            ? 'bg-white/10 text-white' 
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>{option.icon}</span>
                                        <span>{option.label}</span>
                                    </div>
                                    {themeMode === option.id && (
                                        <div className="w-2 h-2 rounded-full bg-current" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-[#1A1F1C]/90 backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-center text-white hover:bg-[#232A26] transition-colors"
                aria-label="Toggle Theme"
            >
                {isOpen ? <X size={20} /> : <Palette size={20} />}
            </motion.button>
        </div>
    );
}
