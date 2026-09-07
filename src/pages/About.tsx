export default function About() {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-500 text-xs uppercase mb-2">Get to know me</p>
        <h1 className="text-3xl font-bold mb-8">About me</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-gray-600 text-sm mb-4">
              I'm a Computer Science student at Cal State Long Beach (BA, 2022-present),
              with an Associate's in Information Systems from Laney College. I'm a
              freelance software engineer building full-stack applications across
              finance, gaming, and on-chain data.
            </p>
            <p className="text-gray-600 text-sm">
              I like software that does one thing well - clean data pipelines, fast
              APIs, and interfaces that don't get in the way. Currently open to
              internship and full-time opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-64">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="text-xl font-bold">3</div>
              <div className="text-xs text-gray-500">shipped projects</div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="text-xl font-bold">2022</div>
              <div className="text-xs text-gray-500">started CS at CSULB</div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="text-xl font-bold">Open</div>
              <div className="text-xs text-gray-500">to internship / full-time work</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}