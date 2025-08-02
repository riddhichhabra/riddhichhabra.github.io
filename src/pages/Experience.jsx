import "../stylesheets/Home.css"
import experienceData from "../data/experience";
import ExpCard from "../components/experienceCard";

export default function Experience(){
    const title1 = "Intern";
    const dates1 = "2025-10-19";
    const desc1 = "Hi";
    const link1 = "https://github.com";
    const img1 = "src/assets/headshot.png";
    return (
        <>
        <h2 className="text-2xl md:text-4xl semi-bold font-turret animated-gradient uppercase items-center">Experience</h2>
        <div className="flex flex-col items-center justify-center bg-black text-white py-[2vw]">
            {experienceData.map((exp, index)=>(
                <ExpCard key={index} {...exp}
                />
            ))}
        </div>
        </>
    );
}