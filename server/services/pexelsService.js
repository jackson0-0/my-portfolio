const PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search";

// Fetches a random photo from Pexels for the given search query.
export async function fetchRandomPhoto(query, apiKey) {
  // 1. request a page of results for the query from the Pexels API
  const res = await fetch(`${PEXELS_SEARCH_URL}?query=${query}&per_page=15`, {
    headers: { Authorization: apiKey },
  });

  // 2. bail out with a descriptive error if the request itself failed
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Pexels request failed: ${res.status} ${text}`);
  }

  // 3. pick one random photo out of the returned results
  const data = await res.json();
  const photos = data.photos || [];
  const photo = photos[Math.floor(Math.random() * photos.length)];

  // 4. return null if there were no usable results, otherwise the photo
  return photo?.src?.large ? photo : null;
}
