import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16xl:px-16">
        <Image src="/images/about-image.jpg" alt="about image" width={500} height={500} />
        <div>
          <h2>About Me</h2>
          <p>
            I am an IT Support Specialist and Full Stack Developer with 6+ years of experience in the Information Techology field. 
            I am passionate about coding and am always looking for new challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection