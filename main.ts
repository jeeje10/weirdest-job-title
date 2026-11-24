// Weirdest Job Title: Blind Judge Showdown — make.fun entry.
// Writes one job title (at most 60 characters) to /output/entry.txt:
// the weirdest job title we could think of. Senior Apology Writer
// for Self-Driving Cars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Senior Apology Writer for Self-Driving Cars";

// Gate guard: the entry must be 1–60 characters and not only whitespace.
if (entry.length < 1 || entry.length > 60 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-60`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
