import "../stylesheets/Home.css"
import CourseCard from "../components/coursesCard"

export default function CV() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-semibold font-turret animated-gradient uppercase text-center mb-8">
        Curriculum Vitae
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-16 py-[2vw] px-[10vw] text-white">

        <div className="flex flex-col w-full md:w-2/3 items-center">
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase mb-2">
            Courses
          </h4>
          <h5 className="text-md md:text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
            Fall 2025
          </h5>

          <div className="flex flex-col w-full max-w-2xl space-y-4">
            <CourseCard
              title={"Math 300"}
              description={
                "Long example description for the course that should wrap naturally and align with others."
              }
            />
            <CourseCard
              title={"PHYS 206"}
              description={"Second course description here."}
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/3 space-y-6">
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase">
            Awards and Honors
          </h4>
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase">
            Posters and Presentations
          </h4>
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase">
            Misc Activities
          </h4>
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase">
            Skills
          </h4>
          <h4 className="text-xl md:text-2xl font-semibold font-turret animated-gradient uppercase">
            Interests
          </h4>
        </div>
      </div>
    </>
  );
}
