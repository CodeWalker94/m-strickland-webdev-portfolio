import booksAndCranniesScreenshot from "../assets/images/books-and-crannies-screenshot.png?url";
import cinescopeScreenshot from "../assets/images/cinescope-screenshot.png?url";
import playlistSorterScreenshot from "../assets/images/playlist-sorter-screenshot.png?url";
import vortrixHomepageScreenshot from "../assets/images/Vortrix-homepage-screenshot.png?url";
import vortrixFeaturedScreenshot from "../assets/images/Vortrix-featured-page-screenshot.png?url";
import vortrixProductScreenshot from "../assets/images/Vortrix-product-page-screenshot.png?url";
import cedarStoneHomeScreenshot from "../assets/images/Cedar-&-Stone-1.png?url";
import cedarStoneAboutScreenshot from "../assets/images/Cedar-&-Stone-2.png?url";
import cedarStoneWorkScreenshot from "../assets/images/Cedar-&-Stone-3.png?url";
import type { TechName } from "./techStack";

export type Screenshot = {
  src: string;
  /**
   * CSS object-position for the crop. Full-page screenshots are very tall, so the
   * 300px-tall box only shows a slice; this picks WHICH slice. Omit for "top".
   */
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  stack: TechName[];
  summary: string;
  story: string;
  screenshots?: Screenshot[];
  challenges: string[];
  learnings: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "cedar-and-stone",
    title: "Cedar & Stone",
    description:
      "A custom WordPress theme built entirely from scratch, no page builder, no starter theme, with a filterable project gallery and a full-screen lightbox.",
    role: "WordPress, PHP, vanilla JavaScript, CSS architecture",
    tech: ["PHP", "Custom Post Types", "WP_Query", "Vanilla JS", "CSS"],
    stack: ["WordPress", "PHP"],
    summary:
      "A complete website for a landscaping company: custom Services and Projects sections, a filterable photo gallery with a full-screen lightbox, an About page with a company timeline, a blog, and a quote request form. Live on real hosting.",
    story:
      "My first WordPress theme, built from a blank folder instead of a starter template or page builder, so I'd actually understand how WordPress works under the hood. It includes a filterable project gallery with a lightbox, a company timeline, a blog, and a quote form with server-side validation. Deploying it to free hosting meant migrating the database and files by hand instead of using a one-click installer.",
    screenshots: [
      { src: cedarStoneHomeScreenshot},
      // Full-page shots: default "top" would show only the hero, so aim each crop
      // at the part that actually demonstrates the build.
      { src: cedarStoneAboutScreenshot, position: "center 44%" }, // crew photos + history timeline
      { src: cedarStoneWorkScreenshot, position: "center 20%" }, // filter pills + masonry grid
    ],
    challenges: [
      "The project gallery duplicated itself on load. Fixed a race condition so the setup script only seeds it once.",
      "Filtering the gallery sometimes left tiles invisible. Fixed a conflict between the filter and the scroll-in animation.",
      "The Services page returned a 404. Corrected a mismatched URL and cleared WordPress's cached links.",
      "Menu links and the call-to-action button were invisible on mobile because a CSS rule was overriding their color. Scoped the style so it only affects what it should.",
      "The free host's 10MB upload limit broke the one-click migration tool. Migrated manually instead: a database import plus a direct file transfer.",
    ],
    learnings: [
      "A blank page and a 404 mean two different things in WordPress. Learning to tell them apart cuts debugging time in half.",
      "Background tasks can run twice if you don't guard against it. Repeat-safe operations should be the default, not an afterthought.",
      "Broad CSS selectors can quietly override more specific styles elsewhere on the page.",
      "PHP fails silently on typos. A misspelled function name just does nothing, no error to point you at it.",
      "Hosting limits shape how you deploy. Know your host's constraints before you plan the migration.",
    ],
    url: "https://cedar-and-stone.byethost18.com",
    repo: "https://github.com/CodeWalker94/cedar-stone-theme.git",
  },
  {
    slug: "books-and-crannies",
    title: "Books & Crannies",
    description:
      "A TypeScript bookstore with saved collections, search, and custom book management.",
    role: "Vanilla TypeScript, HTML, CSS",
    tech: ["TypeScript", "localStorage", "Responsive Design", "DOM APIs"],
    stack: ["TypeScript"],
    summary:
      "A bookstore app built from scratch in TypeScript, HTML, and CSS, no framework. Supports saved collections, search, filtering, and custom book entries.",
    story:
      "My first real JavaScript project, built to keep all my online book links organized in one place with a visual library and an active reading list. It taught me how to manage state across pages, persist data with localStorage, and clean up duplicated logic into shared modules.",
    screenshots: [{ src: booksAndCranniesScreenshot }],
    challenges: [
      "The mobile sidebar overlapped the menu button. Fixed a CSS layering issue with a shared layout variable.",
      "Search and filters broke when combined. Rewrote the logic so filters always start from the full book list.",
      "Saved books vanished on refresh. Added localStorage persistence so the list survives a reload.",
      "The live site broke after switching to TypeScript. Fixed the build setup so the compiled files actually ship.",
    ],
    learnings: [
      "Layering issues come from stacking context, not just z-index numbers.",
      "Filter logic should always derive from the original source data.",
      "Client-side state needs localStorage to survive a page reload.",
      "Static hosting needs the actual built files, and filename casing matters in production.",
    ],
    url: "https://v0-books-and-crannies.vercel.app/",
    repo: "https://github.com/CodeWalker94/books-and-crannies-js.git",
  },
  {
    slug: "vortrix",
    title: "VORTRIX",
    description:
      "A custom Shopify theme built from the ground up on Skeleton (not a Dawn reskin), with an AJAX cart, a quick-view modal, and predictive search.",
    role: "Shopify Liquid, JavaScript, CSS architecture",
    tech: ["Liquid", "Shopify CLI", "JavaScript", "CSS"],
    stack: ["Shopify Liquid"],
    summary:
      "A premium outdoor-gear Shopify theme with an AJAX cart drawer, a quick-view modal, live size/color availability, and predictive search. Built on Shopify's Skeleton base, eligible for the official Theme Store.",
    story:
      "Built to learn real Shopify theme development instead of customizing a template. Every section is built from scratch: a mega menu, filtering, a cart drawer, and a quick-view modal. Partway through, the quick-view modal and product page started duplicating the same logic, so I refactored around a shared component both could use, which taught me more about maintainable architecture than the original build did. Store password to view the live demo: shopVORTRIX.",
    screenshots: [
      { src: vortrixHomepageScreenshot },
      { src: vortrixFeaturedScreenshot },
      { src: vortrixProductScreenshot },
    ],
    challenges: [
      "The quick-view modal and product page needed identical variant logic. Extracted it into one shared component both use.",
      "Scripts were scattered across files with hidden dependencies, causing bugs like a cart that only updated on refresh. Consolidated everything into one organized file.",
      "The theme's packaging script was silently corrupting text and file paths on export. Traced it to an encoding mismatch and fixed the script directly.",
    ],
    learnings: [
      "Shopify's Liquid sections and snippets map closely to React's component model, page-level pieces and reusable child components.",
      "Once I saw that parallel, I restructured shared styles and scripts into one global file instead of duplicating them per page.",
      "Duplication should be caught and extracted at the first copy, not the second bug report.",
      "Event delegation is what makes dynamically-added content work without extra rebinding code.",
      "Script load order causes real, hard-to-spot bugs when one script depends on another.",
    ],
    url: "https://smartflow-dev-store.myshopify.com/",
    repo: "https://github.com/CodeWalker94/vortrix-ecommerce-theme",
  },
  {
    slug: "cinescope",
    title: "CineScope",
    description:
      "A React-powered streaming-style browsing interface using TMDB data and row-based discovery.",
    role: "React, Vite, Tailwind CSS",
    tech: ["React", "Tailwind CSS", "TMDB API", "Data fetching"],
    stack: ["React"],
    summary:
      "Built a streaming-inspired interface for browsing movies and TV shows with curated rows, hero content, and genre-focused discovery.",
    story:
      "CineScope is my attempt to build a more polished, visually rich discovery hub app similar to Firestick or Roku. I focused on layout, hero content, and category accuracy so that Movies, TV, and Animation felt separate but integrated. This project taught me how to handle API-driven UIs and build a more compelling browsing experience.",
    screenshots: [{ src: cinescopeScreenshot }],
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
    stack: ["Next.js"],
    summary:
      "Built a playlist management app that connects to YouTube, loads playlist content, and lets users sort and save playlists with minimal friction.",
    story:
      "YouTube Playlist Sorter solves a real pain point: sorting and curating large playlists when YouTube does not make it easy. Building this taught me how to work with OAuth, paginated API responses, and playlist item workflows while handling common API edge cases like 401 and 404 errors.",
    screenshots: [{ src: playlistSorterScreenshot }],
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
