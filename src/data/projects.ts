export type Project = {
  slug: string;
  title: string;
  tags: string[];
  isClassProject: boolean;
  shortDescription: string;
  scope: string;
  outcome: string;
  problemSolved: string;
  githubUrl: string;
  liveUrl: string;
};

// TODO: fill in liveUrl once each project has a deployed demo,
// and flip isClassProject to true for anything that started as a class assignment.
export const projects: Project[] = [
  {
    slug: "ipo-analyzer",
    title: "IPO Analyzer",
    tags: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "AWS"],
    isClassProject: false,
    shortDescription:
      "Full-stack IPO analyzer that fetches live IPO data and renders it on an interactive calendar with AI-generated investment scores.",
    scope:
      "Solo project. Built the full stack: React/TypeScript frontend, Python FastAPI backend, PostgreSQL database, and AWS deployment.",
    outcome:
      "Users can browse upcoming and past IPOs on a live calendar and instantly see an AI-generated investment score, business summary, and risk flags for each company.",
    problemSolved:
      "Researching an upcoming IPO normally means digging through prospectuses and scattered news. This tool pulls the data automatically and summarizes the important parts, so a viewer gets an informed first read in seconds instead of hours.",
    githubUrl: "https://github.com/jackson0-0/ipo-analyzer",
    liveUrl: "#",
  },
  {
    slug: "pokemon-team-builder",
    title: "Pokemon Team Builder",
    tags: ["React", "Node.js", "Express", "FastAPI", "Python", "MongoDB"],
    isClassProject: false,
    shortDescription:
      "Full-stack app with a React frontend, an Express REST API, and a Python FastAPI microservice for aggregating Pokemon data.",
    scope:
      "Solo project. Designed the React frontend, the Node/Express API layer, and a FastAPI microservice, plus a caching layer in front of both.",
    outcome:
      "Reduced outbound API calls by 80% by aggregating PokeAPI endpoints and caching results with node-cache and MongoDB, so team data persists across server restarts instead of being refetched every time.",
    problemSolved:
      "Building a team from raw Pokemon data means dozens of slow, repetitive API calls. The caching layer makes the app feel instant after the first load and keeps it usable even if the upstream API is slow or rate-limited.",
    githubUrl: "https://github.com/jackson0-0/pokemon-app",
    liveUrl: "#",
  },
  {
    slug: "options-analytics-dashboard",
    title: "Options Analytics Dashboard",
    tags: ["React", "FastAPI", "Python", "NumPy", "REST APIs"],
    isClassProject: false,
    shortDescription:
      "Options analytics tool running 20,000-path Monte Carlo simulations to estimate probability of profit and expected value.",
    scope:
      "Solo project. Built the simulation engine in Python/NumPy, a FastAPI layer to serve results, and a React dashboard to visualize them.",
    outcome:
      "Given a ticker, the dashboard pulls live options chains and implied volatility across 15 strikes for calls and puts, then runs Geometric Brownian Motion simulations to estimate in-the-money probability and expected value for each contract.",
    problemSolved:
      "Manually estimating the odds an option finishes profitable requires modeling volatility and running simulations by hand. This dashboard automates that so a trader can compare strikes at a glance instead of building a spreadsheet each time.",
    githubUrl: "https://github.com/jackson0-0/monte-simulation",
    liveUrl: "#",
  },
];
