export default function ExpCard({ title, dates, description, link, linkDesc, image}){
    return (
        <div className="bg-[#e4dccf] rounded-lg p-6 max-w-3xl mb-6 w-[80vw]">
            <div className="flex items-center">
                <h2 className="text-xl font-semibold mb-1 text-[#500000]">{title}</h2>
                <h2 className="ml-auto text-xl font-semibold mb-1 text-[#500000]"> {dates} </h2>
            </div>
            <hr className="border-[#9E5F5F]"/>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 text-[#500000] text-sm md:text-base">
                <p className="mb-2 overflow-auto overflow-x whitespace-pre-wrap break-words flex justify-stretch text-justify">{description}</p>
                
                {link && (
                    <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9E5F5F] font-semibold hover:underline"
                    >
                    {linkDesc} →
                    </a>
                )}
                </div>

                {image && (
                    <img
                        src={image}
                        alt= {`image corresponding to ${title}`}
                        className="w-[15vw] h-auto object-cover py-2 rounded-md self-center md:self-start"
                    />
                )}
            </div>
        </div>
    );
}