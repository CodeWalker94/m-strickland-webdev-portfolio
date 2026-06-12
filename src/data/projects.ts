import booksAndCranniesScreenshot from "../assets/images/books-and-crannies-screenshot.png?url";
import cinescopeScreenshot from "../assets/images/cinescope-screenshot.png?url";
import playlistSorterScreenshot from "../assets/images/playlist-sorter-screenshot.png?url";

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
    screenshots: [booksAndCranniesScreenshot],
    challenges: [
      "Mobile sidebar overlapped the hamburger button due to CSS stacking context, so I restructured the layout and used a header-height CSS variable.",
      "Search and filter broke when combined because the filter ran on a pre-filtered array, so I rewrote it in vanilla JS to always use the full source data.",
      "Saved books disappeared on refresh because the collection used a memory-only Set, so I moved persistence to localStorage with JSON rehydration.",
      "GitHub Pages had no runtime after TypeScript migration because compiled JS was in .gitignore, so I committed the build output and fixed Linux filename casing.",
    ],
    learnings: [
      "z-index is controlled by stacking context, not absolute numbers.",
      "Filter logic should always derive from the original source data.",
      "Client-side persistence requires localStorage for reloads.",
      "Static hosts need built assets, and filename casing matters in production.",
    ],
    url: "https://v0-books-and-crannies.vercel.app/",
    repo: "https://github.com/CodeWalker94/books-and-crannies-js.git",
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
      "CineScope is my attempt to build a more polished, visually rich discovery hub app similar to Firestick or Roku. I focused on layout, hero content, and category accuracy so that Movies, TV, and Animation felt separate but integrated. This project taught me how to handle API-driven UIs and build a more compelling browsing experience.",
    screenshots: [cinescopeScreenshot],
    challenges: [
      "TMDB genre rows showed wrong content, so I added JS genre filters, exclusion lists, and a primary genre check for accurate shelves.",
      "Tab switches caused stale API results to overwrite fresh data, so I used React useEffect cleanup cancel flags plus a shared request cache.",
      "Mobile carousel cards clipped on hover, so I used useLayoutEffect to measure card width and inject edge padding via a CSS variable.",
    ],
    learnings: [
      "useLayoutEffect is the right hook for DOM measurement before paint.",
      "useEffect dependencies compare by reference, so stable primitives are essential.",
      "APIs need client-side safety nets when raw results are inconsistent.",
      "Async React needs cancel cleanup and shared request caching to avoid stale updates.",
    ],
    url: "https://cinescope-puce.vercel.app/",
    repo: "https://github.com/CodeWalker94/cinescope.git",
  },
  {
    slug: "playlist-sorter-for-youtube",
    title: "Playlist Sorter For YouTube",
    description:
      "A Next.js dashboard for loading, sorting, and saving YouTube playlists with Google OAuth.",
    role: "Next.js, TypeScript, YouTube API",
    tech: ["Next.js", "TypeScript", "NextAuth", "YouTube Data API"],
    summary:
      "Built a playlist management app that connects to YouTube, loads playlist content, and lets users sort and save playlists with minimal friction.",
    story:
      "YouTube Playlist Sorter solves a real pain point: sorting and curating large playlists when YouTube does not make it easy. Building this taught me how to work with OAuth, paginated API responses, and playlist item workflows while handling common API edge cases like 401 and 404 errors.",
    screenshots: [playlistSorterScreenshot],
    challenges: [
      "Select All showed 1 because stale sessionStorage stripped entryId. I bumped the cache version and added a TypeScript shape check.",
      "YouTube playlist items use item.id for slot and videoId for content, so I separated them and kept them distinct with a JS Map.",
      "Auth expired after an hour because NextAuth did not refresh Google tokens. I added refreshAccessToken in the NextAuth jwt callback and offline consent to the auth flow.",
      "Sort only covered 50 playlists because YouTube paginates. I fetched all pages in a TypeScript do/while loop and used AbortController cleanup.",
    ],
    learnings: [
      "Version your cache keys and validate stored data before use.",
      "item.id is the playlist slot, videoId is the video. They are not interchangeable.",
      "Google OAuth refresh requires access_type offline and prompt consent.",
      "Paginated APIs must be fully fetched before client-side sorting.",
    ],
    url: "https://playlist-sorter-for-youtube.vercel.app/",
    repo: "https://github.com/CodeWalker94/playlist-sorter-for-youtube.git",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
