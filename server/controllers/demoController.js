import { fetchRandomPhoto } from "../services/pexelsService.js";
import { generateCaption } from "../services/anthropicService.js";

const QUERIES = ["dog", "smile", "mountain", "coffee", "city", "ocean"];

export async function getDemo(req, res) {
  try {
    // 1. pick a random search query from the predetermined list
    const query = QUERIES[Math.floor(Math.random() * QUERIES.length)];

    // 2. confirm both API keys are configured before making any requests
    const pexelsKey = process.env.PEXELS_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!pexelsKey || !anthropicKey) {
      return res.status(500).json({
        error: "Missing API key",
        details: {
          PEXELS_API_KEY: !!pexelsKey,
          ANTHROPIC_API_KEY: !!anthropicKey,
        },
      });
    }

    // 3. fetch a random photo for that query from Pexels
    const photo = await fetchRandomPhoto(query, pexelsKey);

    if (!photo) {
      return res.status(502).json({ error: "No image results found for the selected query." });
    }

    // 4. ask Claude to caption the photo based on the same query
    const caption = await generateCaption(query, anthropicKey);

    // 5. send the query, image URL, and caption back to the frontend
    res.json({
      query,
      imageUrl: photo.src.large,
      caption,
    });
  } catch (err) {
    console.error("Demo route error:", err);
    res.status(500).json({
      error: "Something went wrong",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
