export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-6">
      <div className="max-w-xl w-full">
        <p className="text-sm text-gray-500 mb-2">Full Stack Developer</p>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jackson Lam</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          A computer science student who loves building fullstack applications.
          I like building things that develop my interests and benefit others.
          I love coding and learning technologies to grow as a developer.
        </p>

        <div className="flex gap-3 mb-6">
          <a href="/contact" className="border border-black px-5 py-2 rounded">
            Get in Touch
          </a>
          <a href="/projects" className="border border-gray-300 px-5 py-2 rounded">
            View Projects
          </a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/jackson0-0" target="_blank" className="text-gray-500 text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jacksonlam227" target="_blank" className="text-gray-500 text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}