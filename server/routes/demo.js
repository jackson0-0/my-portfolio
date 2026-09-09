import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = express.Router();

const QUERIES = ["dog", "smile", "mountain", "coffee", "city", "ocean"];

router.get("/demo", async (req, res) => {
  try {
    const query = QUERIES[Math.floor(Math.random() * QUERIES.length)];

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

    const imageRes = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
      { headers: { Authorization: pexelsKey } }
    );

    if (!imageRes.ok) {
      const text = await imageRes.text();
      throw new Error(`Pexels request failed: ${imageRes.status} ${text}`);
    }

    const imageData = await imageRes.json();
    const photo = imageData.photos?.[Math.floor(Math.random() * (imageData.photos?.length || 1))];

    if (!photo || !photo.src?.large) {
      return res.status(502).json({ error: "No image results found for the selected query." });
    }

    const anthropic = new Anthropic({ apiKey: anthropicKey });
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 60,
      messages: [
        { role: "user", content: `Write a short caption for a photo of "${query}". Under 15 words.` },
      ],
    });

    res.json({
      query,
      imageUrl: photo.src.large,
      caption: message.content[0].text,
    });
  } catch (err) {
    console.error("Demo route error:", err);
    res.status(500).json({
      error: "Something went wrong",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
});

export default router;