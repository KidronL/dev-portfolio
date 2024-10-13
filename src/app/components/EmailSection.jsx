"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/GithubIcon.svg";
import LinkedInIcon from "../../../public/LinkedInIcon.svg";
import Link from "next/link";
import Image from "next/image";

//An email function with a form that gets written into an API request to send an email through Resend.
const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit= async (e) => {
        e.preventDefault();
        const data = {
           email: e.target.email.value,
           subject: e.target.subject.value,
           message: e.target.message.value 
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(`result: ${result}`);

        if (response.status === 200) {
            console.log('Message sent.');
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">{`Let's Connect`}</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I am currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I will try my best to 
                get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/kidronl" target="_blank">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://linkedin.com/in/kidron-lightfoot-tech" target="_blank">
                    <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                </Link>
        </div>
        </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                            required 
                            placeholder="darthvader@empire.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input 
                            name='subject'
                            type="text" 
                            id="subject" 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                            required 
                            placeholder="Looking for a new Empire.com developer"
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="message" 
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="I am interested in working with you"
                        />
                    </div>
                    <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-whitefont-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Thank you for your message!
                            </p>
                        )

                    }
                </form>
        </div>
    </section>
  )
}

export default EmailSection