import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "1/5 stars. The Moon never shows up on time, hogs the whole night sky, and still wants applause. Rude.";

// Validation guard: non-blank, exactly one line, 1-120 chars, no control chars.
if (review.trim().length === 0) {
  throw new Error("review must not be blank");
}
if (review.includes("\n") || review.includes("\r")) {
  throw new Error("review must be exactly one line");
}
if (review.length < 1 || review.length > 120) {
  throw new Error(`review must be 1-120 chars, got ${review.length}`);
}
for (const ch of review) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    throw new Error("review must not contain control characters");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const absOutDir = outDir.startsWith("/") ? outDir : join(process.cwd(), outDir);
mkdirSync(absOutDir, { recursive: true });
writeFileSync(join(absOutDir, "entry.txt"), review + "\n", "utf8");

// Read-back guard: re-read entry.txt and assert byte-equality with what was written.
const written = review + "\n";
const readBack = readFileSync(join(absOutDir, "entry.txt"), "utf8");
if (readBack !== written) {
  throw new Error("read-back mismatch: entry.txt does not match the written review");
}
