import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#3d6ea5] text-xs uppercase mb-2">Portfolio</p>
        <h1 className="text-3xl font-bold mb-1">Projects</h1>
        <p className="text-[#8a97a5] text-sm mb-8">Some things I've built.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="border border-[#1c2d3f] rounded-lg overflow-hidden flex flex-col h-full bg-[#0f1c2c]"
            >
              <div className="h-36 bg-[#0d1826] border-b border-[#1c2d3f] flex items-center justify-center text-[#8a97a5] text-xs">
                preview
              </div>
              <div className="p-5 flex flex-col flex-1">
                {project.isClassProject && (
                  <span className="self-start text-[10px] uppercase tracking-wide border border-[#3d6ea5] text-[#3d6ea5] rounded-full px-2 py-1 mb-3">
                    Class Project
                  </span>
                )}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-[#3d6ea5] text-[#3d6ea5] rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 mt-1">{project.title}</h3>
                <p className="text-[#8a97a5] text-sm mb-4">{project.shortDescription}</p>
                <div className="flex gap-2 border-t border-[#1c2d3f] pt-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-[#1c2d3f] text-[#8a97a5] text-xs rounded py-2 hover:border-[#3d6ea5] hover:text-white"
                  >
                    GitHub
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex-1 text-center bg-[#3d6ea5] text-white text-xs rounded py-2 hover:bg-[#4a7db4]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
