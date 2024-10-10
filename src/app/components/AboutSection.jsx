"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack Web Development</li>
        <li>Promineo Tech</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>IT Specialist</li>
        <li>Disability Planners</li>
      </ul>
    )
  },

]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16xl:px-16">
        <Image src="/images/about-image.jpg" alt="about image" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an IT Support Specialist and Full Stack Developer with 6+ years of experience in the Information Techology field. 
            I am passionate about coding and am always looking for new challenges.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
             selectTab={() => handleTabChange("skills")}
             active={tab === "skills"}
            >
              {" "}
              Skills{" "} 
            </TabButton>
            <TabButton
             selectTab={() => handleTabChange("education")}
             active={tab === "education"}
            >
              {" "}
              Education{" "} 
            </TabButton>
            <TabButton
             selectTab={() => handleTabChange("experience")}
             active={tab === "experience"}
            >
              {" "}
              Experience{" "} 
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection