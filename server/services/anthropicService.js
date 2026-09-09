import Anthropic from "@anthropic-ai/sdk";

// Asks Claude for a short caption describing a photo of the given query.
export async function generateCaption(query, apiKey) {
  // 1. build the client lazily so this always picks up the current env var
  //    (rather than whatever was set when the module first loaded)
  const anthropic = new Anthropic({ apiKey });

  // 2. ask the model for a short caption based on the search query
  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 60,
    messages: [
      { role: "user", content: `Write a short caption for a photo of "${query}". Under 15 words.` },
    ],
  });

  // 3. return just the text of the reply
  return message.content[0].text;
}
