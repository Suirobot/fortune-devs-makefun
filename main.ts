// Fortune Cookie Wisdom for Developers — entrypoint.
// Writes one original fortune-cookie line for a software developer
// (at most 120 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "You will meet a tall, dark stranger this week: it is your own code, from six months ago, and it knows what you did.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
