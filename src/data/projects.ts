export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  summary: string;
  story: string;
  screenshots?: string[];
  challenges: string[];
  learnings: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "books-and-crannies",
    title: "Books & Crannies",
    description:
      "A TypeScript bookstore with saved collections, search, and custom book management.",
    role: "Vanilla TypeScript, HTML, CSS",
    tech: ["TypeScript", "localStorage", "Responsive Design", "DOM APIs"],
    summary:
      "Built a bookstore experience from scratch using only TypeScript, HTML, and CSS. The app supports saved books, filters, searches, and custom book creation without a framework.",
    story:
      "This was my first real JavaScript project. I built Books & Crannies to keep all my online book links in one place, with a visual library, custom book cards, and an active reading list. The experience taught me how to manage state across pages, handle localStorage persistence, and clean up duplicated logic through shared data modules.",
    screenshots: [],
    challenges: [
      "Managing state and UI updates without React or a frontend framework.",
      "Creating a mobile-friendly card interface with flip interactions and accessible controls.",
      "Keeping saved collections synced and persistent in localStorage.",
    ],
    learnings: [
      "How to structure a medium-size app with modules and type-safe data models.",
      "Practical use of localStorage for persistence and cross-tab sync.",
      "The power of clean responsive layout and progressive enhancement.",
    ],
    url: "#",
    repo: "#",
  },
  {
    slug: "cinescope",
    title: "CineScope",
    description:
      "A React-powered streaming-style browsing interface using TMDB data and row-based discovery.",
    role: "React, Vite, Tailwind CSS",
    tech: ["React", "Tailwind CSS", "TMDB API", "Data fetching"],
    summary:
      "Built a streaming-inspired interface for browsing movies and TV shows with curated rows, hero content, and genre-focused discovery.",
    story:
      "CineScope is my attempt to build a more polished, visually rich app similar to Firestick or Roku. I focused on layout, hero content, and category accuracy so that Movies, TV, and Animation felt separate but integrated. This project taught me how to handle API-driven UIs and build a more compelling browsing experience.",
    screenshots: [],
    challenges: [
      "Balancing API requests while keeping content fresh and performant.",
      "Maintaining genre accuracy for curated shelves across multiple content categories.",
      "Designing a responsive carousel layout that feels polished on desktop and mobile.",
    ],
    learnings: [
      "How to build reusable React components for a scalable UI.",
      "The importance of cache-friendly data fetching and minimal network calls.",
      "Crafting a polished browsing experience with responsive layout and clear content hierarchy.",
    ],
    url: "#",
    repo: "#",
  },
  {
    slug: "youtube-playlist-sorter",
    title: "YouTube Playlist Sorter",
    description:
      "A Next.js dashboard for loading, sorting, and saving YouTube playlists with Google OAuth.",
    role: "Next.js, TypeScript, YouTube API",
    tech: ["Next.js", "TypeScript", "NextAuth", "YouTube Data API"],
    summary:
      "Built a playlist management app that connects to YouTube, loads playlist content, and lets users sort and save playlists with minimal friction.",
    story:
      "YouTube Playlist Sorter solves a real pain point: sorting and curating large playlists when YouTube does not make it easy. Building this taught me how to work with OAuth, paginated API responses, and playlist item workflows while handling common API edge cases like 401 and 404 errors.",
    screenshots: [],
    challenges: [
      "Working with paginated YouTube API responses and playlist item IDs.",
      "Implementing authentication and token refresh with Google OAuth.",
      "Designing a dashboard workflow for multi-select, sorting, and saving playlist items.",
    ],
    learnings: [
      "How to use Next.js App Router with client-side hooks for interactivity.",
      "When to use localStorage and sessionStorage for app state persistence.",
      "Building a data-heavy UI that still feels clean and usable.",
    ],
    url: "#",
    repo: "#",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
