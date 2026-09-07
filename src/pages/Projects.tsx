export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-500 text-xs uppercase mb-2">Portfolio</p>
        <h1 className="text-3xl font-bold mb-1">Projects</h1>
        <p className="text-gray-600 text-sm mb-8">Some things I've built.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col h-full">
            <div className="h-36 bg-gray-100 border-b border-gray-300 flex items-center justify-center text-gray-400 text-xs">
              preview
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">React</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">TypeScript</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">FastAPI</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">Python</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">PostgreSQL</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">AWS</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-1">IPO Analyzer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Full-stack IPO analyzer that fetches live IPO data from the Nasdaq API
                and renders it on an interactive calendar. Integrated Claude AI to
                generate investment scores, business summaries, and risk flags.
                Deployed on AWS using Lambda, API Gateway, RDS PostgreSQL, and S3.
              </p>
              <div className="flex gap-2 border-t border-gray-300 pt-3 mt-auto">
                <a href="#" className="flex-1 text-center border border-gray-300 text-gray-600 text-xs rounded py-2">
                  GitHub
                </a>
                <a href="#" className="flex-1 text-center bg-black text-white text-xs rounded py-2">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col h-full">
            <div className="h-36 bg-gray-100 border-b border-gray-300 flex items-center justify-center text-gray-400 text-xs">
              preview
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">React</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">Node.js</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">Express</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">FastAPI</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">Python</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">MongoDB</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-1">Pokemon Team Builder</h3>
              <p className="text-gray-600 text-sm mb-4">
                Full-stack app with a React frontend, Node.js/Express REST API, and
                Python FastAPI microservice. Reduced API calls by 80% by aggregating
                PokeAPI endpoints. Built a multilayer caching system with node-cache
                and MongoDB to persist data across server restarts.
              </p>
              <div className="flex gap-2 border-t border-gray-300 pt-3 mt-auto">
                <a href="#" className="flex-1 text-center border border-gray-300 text-gray-600 text-xs rounded py-2">
                  GitHub
                </a>
                <a href="#" className="flex-1 text-center bg-black text-white text-xs rounded py-2">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col h-full">
            <div className="h-36 bg-gray-100 border-b border-gray-300 flex items-center justify-center text-gray-400 text-xs">
              preview
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">React</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">FastAPI</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">Python</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">NumPy</span>
                <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-1">REST APIs</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-1">Options Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">
                Full-stack options analytics tool running 20,000-path Monte Carlo
                simulations using Geometric Brownian Motion to estimate ITM probability
                and expected value. Pulled live options chains and implied volatility
                from Yahoo Finance across 15 strikes for both calls and puts.
              </p>
              <div className="flex gap-2 border-t border-gray-300 pt-3 mt-auto">
                <a href="#" className="flex-1 text-center border border-gray-300 text-gray-600 text-xs rounded py-2">
                  GitHub
                </a>
                <a href="#" className="flex-1 text-center bg-black text-white text-xs rounded py-2">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}