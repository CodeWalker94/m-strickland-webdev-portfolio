export const TECH_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#ca8a04",
  React: "#0ea5e9",
  "Next.js": "#171717",
  Astro: "#ff5d01",
  "Shopify Liquid": "#3b7a29",
  PHP: "#5a5fa0",
  WordPress: "#21759b",
  "Tailwind CSS": "#0284c7",
  CSS: "#2563eb",
  HTML: "#dd4b25",
  MySQL: "#00758f",
  PostgreSQL: "#336791",
  "Node.js": "#2e7d32",
} as const;

export type TechName = keyof typeof TECH_COLORS;
