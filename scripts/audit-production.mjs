import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distRoot = join(projectRoot, "dist");
const sourceRoots = [join(projectRoot, "src"), join(projectRoot, "public")];
const fail = (message) => {
  throw new Error(message);
};
const walk = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const htmlPath = join(distRoot, "index.html");
if (!existsSync(htmlPath))
  fail("dist/index.html is missing; run the build first.");
const html = readFileSync(htmlPath, "utf8");
const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
if (h1Count !== 1) fail(`Expected one H1; found ${h1Count}.`);
if (/localhost|127\.0\.0\.1/i.test(html))
  fail("Local URL found in index.html.");
if (
  !/<link rel="canonical" href="https:\/\/salonmaster\.com\.br\/?"/.test(html)
)
  fail("Canonical URL is missing or invalid.");
if (
  !/og:image:width" content="1200"/.test(html) ||
  !/og:image:height" content="630"/.test(html)
)
  fail("OG image dimensions are missing.");
if (
  !/og:image" content="https:\/\/salonmaster\.com\.br\/og-salonmaster\.jpg"/.test(
    html,
  )
)
  fail("OG image must use the stable SalonMaster social image.");
if (!/href="\/favicon\.svg"/.test(html))
  fail("SalonMaster favicon is missing.");
if (!/href="\/site\.webmanifest"/.test(html)) fail("Web manifest is missing.");
for (const type of [
  "Organization",
  "WebSite",
  "WebPage",
  "SoftwareApplication",
  "FAQPage",
]) {
  if (!html.includes(`"@type":"${type}"`))
    fail(`JSON-LD type missing: ${type}.`);
}
if (/GTM-|googletagmanager|google-analytics\.com/i.test(html))
  fail("Analytics must remain disabled until consent is configured.");
const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];
for (const tag of imageTags) {
  if (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag))
    fail(`Image without explicit dimensions: ${tag}`);
  if (!/\balt(?:=|\s|>)/.test(tag)) fail(`Image without alt text: ${tag}`);
}
const ids = new Set(
  [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
);
for (const match of html.matchAll(/href="#([^"]+)"/g))
  if (!ids.has(match[1])) fail(`Internal anchor has no target: #${match[1]}.`);
for (const filename of [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "favicon.svg",
  "favicon-32.png",
  "apple-touch-icon.png",
  "pwa-192.png",
  "pwa-512.png",
  "pwa-maskable-512.png",
  "site.webmanifest",
  "og-salonmaster.jpg",
])
  if (!existsSync(join(distRoot, filename))) fail(`Missing dist/${filename}.`);
const manifest = readFileSync(join(distRoot, "site.webmanifest"), "utf8");
for (const icon of [
  "favicon.svg",
  "pwa-192.png",
  "pwa-512.png",
  "pwa-maskable-512.png",
])
  if (!manifest.includes(`\"/${icon}\"`))
    fail(`Manifest icon missing: ${icon}.`);
if (!manifest.includes('"theme_color": "#21171d"'))
  fail("Manifest theme color is not aligned with the SalonMaster palette.");
const llms = readFileSync(join(distRoot, "llms.txt"), "utf8");
if (!llms.startsWith("# SalonMaster") || !llms.includes("Página canônica"))
  fail("llms.txt is missing the curated SalonMaster context.");
const distFiles = walk(distRoot);
for (const file of distFiles)
  if (/localhost|127\.0\.0\.1/i.test(readFileSync(file, "utf8")))
    fail(`Local URL found in ${file}.`);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".avi"]);
for (const root of sourceRoots)
  for (const file of walk(root)) {
    if (videoExtensions.has(extname(file).toLowerCase()))
      fail(`Unoptimized video found: ${file}.`);
    if (
      /\.(astro|html|md|mdx|ts|js)$/.test(file) &&
      /<video(?:\s|>)|youtube\.com|youtu\.be|vimeo\.com|\.(?:mp4|webm)(?:["')\s]|$)/i.test(
        readFileSync(file, "utf8"),
      )
    )
      fail(`Video markup requires an optimization review: ${file}.`);
  }
const generatedPng = distFiles.filter(
  (file) =>
    file.startsWith(join(distRoot, "_astro")) && extname(file) === ".png",
);
if (generatedPng.length)
  fail(`Generated responsive PNG remains: ${generatedPng.join(", ")}.`);
const distBytes = distFiles.reduce(
  (total, file) => total + statSync(file).size,
  0,
);
console.log(
  `Production audit passed: H1=${h1Count}, images=${imageTags.length}, JSON-LD=5, analytics=off, videos=0, dist=${Math.round(distBytes / 1024)}KB.`,
);
