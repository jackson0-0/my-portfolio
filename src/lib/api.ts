// Base URL for the Express backend. Set VITE_API_URL in a .env file (or in the
// Netlify build settings once deployed) to point this at the Render backend URL,
// e.g. VITE_API_URL=https://my-portfolio-backend.onrender.com
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
