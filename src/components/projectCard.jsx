export default function ProjectCard({title, description, github, link, linktext, image}){
    return (
        <div className="flex flex-col md:flex-row items-center justify-center items-stretch gap-8 max-w-4xl w-[90vw] py-[2vw]">
            <div className="md:w-[65%] bg-[#e4dccf] rounded-lg flex flex-col">
                <h2 className="text-2xl bg-[#D9C2A0] h-[12] flex justify-center items-center font-semibold items-center mb-4 text-[#500000]">{title}</h2>
                <p className="mb-4 whitespace-pre-wrap break-words text-[#9E5F5F]">{description}</p>
                <div className="h-[12] bg-[#D9C2A0] mt-auto text-[#9E5F5F] flex items-center justify-center gap-4">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {linktext}
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img 
                            src="src/assets/github.svg"
                            className="w-[100%] h-auto rounded-md"
                        />
                    </a>
                </div>
            </div>

            <div className="md:w-[35%] flex justify-center items-center">
                <img
                src={image}
                alt={`image for project ${title}`}
                className="w-max h-auto object-cover rounded-md"
                />
            </div>
        </div>
    );
}