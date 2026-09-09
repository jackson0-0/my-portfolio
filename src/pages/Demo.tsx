import { useState } from "react";
import { API_BASE_URL } from "../lib/api";

type DemoResult = {
  query: string;
  imageUrl: string;
  caption: string;
};

export default function Demo() {
  const [result, setResult] = useState<DemoResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    // 1. clear any previous error and result, and show a loading state
    setLoading(true);
    setError(null);

    try {
      // 2. ask the backend for a random image + AI caption
      const res = await fetch(`${API_BASE_URL}/api/demo`);

      // 3. if the backend responded with an error, surface its message
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.details || body.error || "Request failed");
      }

      // 4. parse the successful response and store it for rendering
      const data: DemoResult = await res.json();
      setResult(data);
    } catch (err) {
      // 5. fall back to a readable error message if anything above throws
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      // 6. always turn off the loading state, whether it succeeded or failed
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-[#3d6ea5] text-xs uppercase mb-2">API Demo</p>
        <h1 className="text-3xl font-bold mb-1">Random Image + AI Caption</h1>
        <p className="text-[#8a97a5] text-sm mb-8">
          Fetches a random photo from Pexels for a random query, then asks Claude to
          write a short caption for it.
        </p>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-[#3d6ea5] text-white rounded px-6 py-3 text-sm font-bold hover:bg-[#4a7db4] disabled:opacity-70"
        >
          {loading ? "Generating..." : "Generate random image"}
        </button>

        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

        {result && (
          <div className="mt-8 border border-[#1c2d3f] rounded-lg overflow-hidden bg-[#0f1c2c]">
            <img
              src={result.imageUrl}
              alt={result.query}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <p className="text-[#3d6ea5] text-xs uppercase mb-2">{result.query}</p>
              <p className="text-[#eef2f6] text-sm leading-relaxed">{result.caption}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
