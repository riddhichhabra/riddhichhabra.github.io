export default function LinksBar(){
    return(
        <div className="w-full fixed bottom-0 z-50 h-16 shadow-md flex justify-center gap-6 items-center p-4 bg-[#1a1a1a] text-white">
            <a href="https://www.github.com/riddhichhabra" target="_blank">
                <img 
                    src="src/assets/github.svg"
                    className="invert h-8 w-auto"
                />
            </a>
            <a href="https://www.linkedin.com/in/riddhi-chhabra/" target="_blank">
                <img 
                    src="src/assets/linkedin.svg"
                    className="invert h-8 w-auto"
                />
            </a>
            <a href="mailto:riddhic@tamu.edu" target="_blank">
                <img 
                    src="src/assets/email.svg"
                    className="invert h-8 w-auto"
                />
            </a>
        </div>
    );
}