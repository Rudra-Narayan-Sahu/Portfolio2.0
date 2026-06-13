import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center
                pt-20
                px-6
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    grid
                    lg:grid-cols-2
                    gap-12 lg:gap-16
                    items-center
                    
                "
            >

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div
                        className="
                            inline-flex
                            px-5 py-2
                            rounded-full
                            bg-white/5
                            border border-white/10
                            mb-8
                        "
                    >
                        {/* <span className="text-sm text-gray-300">
                            Consistent Learner • DSA Enthusiast • Builder
                        </span> */}
                    </div>

                    <h1
                        className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            leading-tight
                        "
                    >
                       Building solutions that matter.
                    </h1>

                    <p
                        className="
                            mt-6
                            text-base
                            md:text-lg
                            text-gray-400
                            max-w-2xl
                        "
                    >
                        I am Rudra Sahu, a B.Tech student passionate about
                        Data Structures & Algorithms, Full Stack Development,
                        AI applications, and building solutions that solve
                        real-world problems.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <button
                            className="
                                px-6 py-3
                                rounded-xl
                                bg-white
                                text-black
                                font-semibold
                                hover:scale-105
                                transition text-sm
                            "
                        >
                            View Projects
                        </button>

                        <button
                            className="
                                px-6 py-3
                                rounded-xl
                                border
                                border-white/20
                                hover:border-white
                                transition text-sm
                            "
                        >
                            Get In Touch
                        </button>

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    {/* Glow */}

                    <div
                        className="
                            absolute
                            inset-0
                            rounded-full
                            bg-white/10
                            blur-[100px]
                        "
                    />

                    <img
                        src={profileImg}
                        alt="Profile"
                        className="
                            relative
        -top-6
        z-10
        w-full
        max-w-sm
        mx-auto
        rounded-full
        border
        border-white/10
                        "
                    />

                    {/* Floating Cards */}

                    <div
                        className="
                            absolute
                            top-6
                            -left-6
                            bg-white/5
                            backdrop-blur-md
                            border
                            border-white/10
                            rounded-xl
                            px-4
                            py-2
                            text-sm
                        "
                    >
                        300+ DSA Problems
                    </div>

                    <div
                        className="
                            absolute
                            bottom-12
                            -right-6
                            bg-white/5
                            backdrop-blur-md
                            border
                            border-white/10
                            rounded-xl
                            px-4
                            py-2
                            text-sm
                        "
                    >
                        Full Stack Developer
                    </div>

                </motion.div>

            </div>
        </section>
    );
}