import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center
                pt-28
                px-6
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    grid
                    lg:grid-cols-2
                    gap-16
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
                            text-5xl
                            md:text-7xl
                            font-bold
                            leading-tight
                        "
                    >
                       Building solutions that matter.
                        <span className="text-[#7ED957]">
                            {" "}
                        </span>
                    </h1>

                    <p
                        className="
                            mt-8
                            text-lg
                            text-gray-400
                            max-w-2xl
                        "
                    >
                        I am Rudra Sahu, a B.Tech student passionate about
                        Data Structures & Algorithms, Full Stack Development,
                        AI applications, and building solutions that solve
                        real-world problems.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <button
                            className="
                                px-8 py-4
                                rounded-xl
                                bg-[#7ED957]
                                text-black
                                font-semibold
                                hover:scale-105
                                transition
                            "
                        >
                            View Projects
                        </button>

                        <button
                            className="
                                px-8 py-4
                                rounded-xl
                                border
                                border-white/10
                                hover:border-[#7ED957]
                                transition
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
                            bg-[#7ED957]/20
                            blur-[100px]
                        "
                    />

                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="
                            relative
        -top-6
        z-10
        w-full
        max-w-md
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
                            top-10
                            -left-10
                            bg-white/5
                            backdrop-blur-md
                            border
                            border-white/10
                            rounded-xl
                            px-5
                            py-3
                        "
                    >
                        300+ DSA Problems
                    </div>

                    <div
                        className="
                            absolute
                            bottom-16
                            -right-10
                            bg-white/5
                            backdrop-blur-md
                            border
                            border-white/10
                            rounded-xl
                            px-5
                            py-3
                        "
                    >
                        Full Stack Developer
                    </div>

                </motion.div>

            </div>
        </section>
    );
}