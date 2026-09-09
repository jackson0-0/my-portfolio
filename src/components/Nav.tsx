import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-bold text-sm"
      : "text-[#8a97a5] text-sm hover:text-white";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="border-b border-[#1c2d3f] bg-[#0a1420]">
      <div className="flex justify-between items-center px-4 sm:px-8 py-5">
        <div className="font-bold text-sm text-white">Jackson Lam</div>

        {/* Desktop links, hidden on small screens */}
        <div className="hidden sm:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/demo" className={linkClass}>Demo</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="hidden sm:flex gap-4">
          <a href="https://github.com/jackson0-0" target="_blank" rel="noopener noreferrer" className="text-[#8a97a5] text-sm hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jacksonlam227" target="_blank" rel="noopener noreferrer" className="text-[#8a97a5] text-sm hover:text-white">
            LinkedIn
          </a>
        </div>

        {/* Hamburger button, only shown on small screens */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="sm:hidden text-[#eef2f6] text-sm border border-[#1c2d3f] rounded px-3 py-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown, only rendered when open */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-4 pb-5 border-t border-[#1c2d3f] pt-4">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/demo" className={linkClass} onClick={closeMenu}>Demo</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
          <div className="flex gap-4 pt-2 border-t border-[#1c2d3f]">
            <a href="https://github.com/jackson0-0" target="_blank" rel="noopener noreferrer" className="text-[#8a97a5] text-sm hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jacksonlam227" target="_blank" rel="noopener noreferrer" className="text-[#8a97a5] text-sm hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
