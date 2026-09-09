import { NavLink } from "react-router-dom";

export default function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-bold text-sm"
      : "text-gray-500 text-sm hover:text-black";

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-300 bg-white">
      <div className="font-bold text-sm">Jackson Lam</div>

      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/jackson0-0" target="_blank" className="text-gray-500 text-sm hover:text-black">
          GitHub
        </a>
        <a href="https://linkedin.com/in/jacksonlam227" target="_blank" className="text-gray-500 text-sm hover:text-black">
          LinkedIn
        </a>
      </div>
    </nav>
  );
}