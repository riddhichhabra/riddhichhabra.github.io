import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 h-16 shadow-md flex justify-between items-center p-4 bg-[#1a1a1a] text-white">
        <div className="">
            <Link to="/" className="hover:underline"><img src="/assets/lineartMe.png" className="invert h-12 w-auto"/></Link>
        </div>
        <div className="flex justify-end gap-6">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/experience" className="hover:underline">Experience</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/cv" className="hover:underline">CV</Link>
            {/* <Link to="/todo" classname="hover:underline">To Do</Link> */}
            {/* <Link to="/contact" classname="hover:underline">Contact</Link> */}
        </div>
    </nav>
  );
}