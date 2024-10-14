import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import  Link  from 'next/link';

// A function for the project cards to take each object in the array and display it with the below styles
const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
  return (
    <div>
        <div className="h-h2 md:h-72 rounded-t-xl relative group object-fit" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor- group-hover/link:text-white"/>
            </Link>
        </div>
        </div>
        <div className="text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p> 
        </div>
    </div>
  )
}

export default ProjectCard;