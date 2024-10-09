"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="lg:col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I am{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Kidron Lightfoot",
                                1000,
                                "IT Support Specialist",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                                "Fullstack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div>
                        <button className="bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 hover:bg-slate-200 text-[#fff] px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 mt-2">
                            Hire Me
                        </button>
                        <button className="bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 hover:bg-slate-800 text-[#fff] px-1 py-1 w-full sm:w-fit rounded-full">
                            <span className="block bg-[black] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-60 h-60 bg-[#171717] rounded-full relative">
                        <Image
                            src="/images/hero-image.jpg"
                            alt="hero image"
                            width={500}
                            height={500}
                            className="rounded-full w-full h-full object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;