import "../stylesheets/Home.css"
import { useTypewriter } from 'react-simple-typewriter';

export default function Home(){
    const [aboutMe] = useTypewriter({
        words: [
            'Undergraduate Researcher @ Karthein Lab',
            'Coding VR orbital mechanics sims @ ASTRO Lab',
            'Interested in Experimental and Computational AMO Physics',
            'Developing modules for PhysicsHack',
            'Being chaotic and trolling'
        ],
        loop: 0,
        typeSpeed: 70,
        delaySpeed: 1000
        
    })
    return (
    <div className="flex flex-col bg-black items-center justify-center min-h-[calc(100vh-200px)]">
            <h1 className="m-0 text-[8vw] tracking-tight uppercase animated-gradient font-turret"> 
                Riddhi Chhabra
            </h1>
            <div text-color-white>
                Currently, I am <span className="text-[#ec4899]">{aboutMe}</span>
            </div>
    </div>

    );
}