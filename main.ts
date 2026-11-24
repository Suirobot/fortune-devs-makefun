// Fortune Cookie Wisdom for Developers — entrypoint.
// Writes one original fortune-cookie line for a software developer
// (at most 120 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "The bug you seek is not in the code you wrote today, but in the code you trusted yesterday.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
