"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Basic Chat Bot",
        description: "Developed a basic chat bot with HTML/CSS/JavaScript.",
        image: "/images/about-image.jpg",
        tag: ["All", "JavaScript"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Basic Chat Bot",
        description: "Developed a basic chat bot with Python.",
        image: "/images/about-image.jpg",
        tag: ["All", "Python"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Basic Chat Bot",
        description: "Developed a basic home page with HTML/CSS.",
        image: "/images/about-image.jpg",
        tag: ["All", "HTML/CSS"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
);
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <ProjectTag 
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="JavaScript"
                isSelected={tag === "JavaScript"}
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="Python"
                isSelected={tag === "Python"}
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="HTML/CSS"
                isSelected={tag === "HTML/CSS"}
            />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    tag={project.tag}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                /> 
            ))}
        </div>
    </>
  )
}

export default ProjectsSection