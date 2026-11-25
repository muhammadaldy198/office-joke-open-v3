// office-joke-open-v3 — one line of office comedy, 102 characters.
// The nameplate outlasts the sitter: a year at one desk, one name kept.
// A hot-desking joke: the desk keeps its nameplate, and the sitter keeps the name.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const joke = "I have hot-desked for a year, and my desk has a nameplate that says Gary. I have been Gary for a year.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, joke, "utf8");
chmodSync(target, 0o644);
