import "../stylesheets/Home.css"

export default function About() {
  return (
    <>
    <h2 className="text-2xl md:text-4xl semi-bold font-turret animated-gradient uppercase items-center">About Me</h2>
    <main className="flex flex-col md:flex-row justify-between items-center gap-12 bg-black text-white">
      <div className="text-sm md:text-base w-full max-w-6xl px-4 mx-auto space-y-4 text-justify">
        <p>Howdy! I’m Riddhi Chhabra, a sophomore Physics major at Texas A&M University. I'm also minoring in CS and Math.</p>
        <p>
          I’m interested in computational simulations and experimental physics. Currently, I'm doing undergraduate research in quantum optics at Karthein Lab and coding orbital mechanics VR simulations in ASTRO Lab.
        </p>
        <p>
          In my free time, I enjoy programming, tinkering with electronics, and exploring new technologies.
        </p>
        <p>
          I’m open to collaborating on fun projects so feel free to get in touch via{' '}
          <a href="mailto:riddhic@tamu.edu" className="text-[#ec4899] hover:underline">
            email
          </a> {' or '}
          <a href="https://www.linkedin.com/in/riddhi-chhabra/" target= "_blank" className="text-[#ec4899] hover:underline">
            LinkedIn
          </a>.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <img 
          src="src/assets/headshot.png"
          className="rounded-full object-cover aspect-square w-[20vw]"
        />
        <a href="https://drive.google.com/file/d/1yuOfMrs08IhO2m5hgUeMRi-et-HZzMCl/view?usp=sharing" target="_blank">
          <button className="mt-1 ml-2 px-4 py-2 bg-[#ec4899] text-white rounded hover:bg-[#8d7b7b] transition">
          View My Resume
          </button>
        </a>
      </div>
    </main>
    </>
  );
}
