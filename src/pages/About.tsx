export default function About() {
  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#3d6ea5] text-xs uppercase mb-2">Get to know me</p>
        <h1 className="text-3xl font-bold mb-8">About me</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-[#8a97a5] text-sm mb-4">
              I'm a Computer Science student at Cal State Long Beach (BA, 2022-present),
              with an Associate's in Information Systems from Laney College. I'm a
              freelance software engineer building full-stack applications across
              finance, gaming, and on-chain data.
            </p>
            <p className="text-[#8a97a5] text-sm">
              I like software that does one thing well - clean data pipelines, fast
              APIs, and interfaces that don't get in the way. Currently open to
              internship and full-time opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-64">
            <div className="border border-[#1c2d3f] rounded-lg bg-[#0f1c2c] p-4">
              <div className="text-xl font-bold text-[#3d6ea5]">3</div>
              <div className="text-xs text-[#8a97a5]">shipped projects</div>
            </div>
            <div className="border border-[#1c2d3f] rounded-lg bg-[#0f1c2c] p-4">
              <div className="text-xl font-bold text-[#3d6ea5]">2022</div>
              <div className="text-xs text-[#8a97a5]">started CS at CSULB</div>
            </div>
            <div className="border border-[#1c2d3f] rounded-lg bg-[#0f1c2c] p-4">
              <div className="text-xl font-bold text-[#3d6ea5]">Open</div>
              <div className="text-xs text-[#8a97a5]">to internship / full-time work</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}