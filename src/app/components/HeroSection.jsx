"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

//The hero section with animations using framer-motion and a TypeAnimation component
const HeroSection = () => {

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1EIiuOJRC9zPkqDrOFd2FerFXN6bS0rau/view?usp=sharing", "_blank");
    }
    return (
        <section className="lg:py-16" id="home">
            <div className="grid grid-cols-1 sm:grid-cols-12 mb-4">
                <motion.div initial={{opacity: 0, scale:0.25}} animate={{opacity: 1, scale:1}}  transition={{duration: 0.7}} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-500">
                            Hello, I am{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Kidron Lightfoot",
                                1000,
                                "an IT Support Specialist",
                                1000,
                                "a Frontend Developer",
                                1000,
                                "a Backend Developer",
                                1000,
                                "a Fullstack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                        An IT Professional with 6+ years of experience in the Information Technology field.
                    </p>
                    <div>
                        <button className="bg-gradient-to-br from-indigo-500 via-primary-500 to bg-secondary-500 hover:bg-slate-200 text-[#fff] px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 mt-2">
                            <Link href="/#contact">Contact Me</Link>
                        </button>
                        <button onClick={handleResume} className="bg-transparent bg-gradient-to-br from-indigo-500 via-primary-500 to bg-secondary-500 hover:bg-slate-800 text-[#fff] px-1 py-1 w-full sm:w-fit rounded-full">
                            <span className="block bg-[black] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, scale:0.25}} animate={{opacity: 1, scale:1}}  transition={{duration: 0.7}} className="lg:col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="w-60 h-60 bg-[#171717] rounded-full relative">
                        <Image
                            src="/images/hero-image.jpg"
                            alt="hero image"
                            width={500}
                            height={500}
                            className="rounded-full w-full h-full object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
};

export default HeroSection;