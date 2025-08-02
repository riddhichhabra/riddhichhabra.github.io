import "../stylesheets/Home.css"
import projectsData from "../data/projects";
import ProjectCard from "../components/projectCard";

export default function Project(){
    return (
        <>
        <h2 className="text-2xl md:text-4xl semi-bold font-turret animated-gradient uppercase items-center">Projects</h2>
        <div className="justify-center">
            <h4 className="text-lg md:text-2xl flex justify-center">Here are a few cool projects that I've worked on</h4>
        </div>
        <div className="flex flex-col items-center justify-center bg-black text-white">
            {projectsData.map((project, index)=>(
                <ProjectCard key={index} {...project}
                />
            ))}
        </div>
        </>
    );
}