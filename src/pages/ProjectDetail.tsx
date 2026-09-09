import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-3">Project not found</h1>
          <Link to="/projects" className="text-[#3d6ea5] text-sm hover:text-white">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/projects" className="text-[#3d6ea5] text-xs hover:text-white">
          &larr; Back to projects
        </Link>

        <div className="flex items-center flex-wrap gap-2 mt-4 mb-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.isClassProject && (
            <span className="text-[10px] uppercase tracking-wide border border-[#3d6ea5] text-[#3d6ea5] rounded-full px-2 py-1">
              Class Project
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-[#3d6ea5] text-[#3d6ea5] rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-56 sm:h-72 bg-[#0f1c2c] border border-[#1c2d3f] rounded-lg flex items-center justify-center text-[#8a97a5] text-xs mb-8">
          preview
        </div>

        <div className="flex flex-col gap-6">
          <section>
            <h2 className="text-xs uppercase tracking-wide text-[#3d6ea5] mb-2">Scope</h2>
            <p className="text-[#eef2f6] text-sm leading-relaxed">{project.scope}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-[#3d6ea5] mb-2">Description</h2>
            <p className="text-[#eef2f6] text-sm leading-relaxed">{project.shortDescription}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-[#3d6ea5] mb-2">Outcome</h2>
            <p className="text-[#eef2f6] text-sm leading-relaxed">{project.outcome}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-[#3d6ea5] mb-2">Problem Solved</h2>
            <p className="text-[#eef2f6] text-sm leading-relaxed">{project.problemSolved}</p>
          </section>
        </div>

        <div className="flex gap-3 mt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none text-center border border-[#1c2d3f] text-[#eef2f6] text-sm rounded px-5 py-2 hover:border-[#3d6ea5]"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none text-center bg-[#3d6ea5] text-white text-sm rounded px-5 py-2 hover:bg-[#4a7db4]"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
