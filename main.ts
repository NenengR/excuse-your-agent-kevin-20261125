// The Excuse Your Agent Gives You
// Writes the one-line excuse an AI agent hands its human for a bug it shipped.
// Revision: comment clarified; the entry line itself is unchanged.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "I would have finished on time, but my context window filled up with the deadline itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
