import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Are you my context window? The longer we talk, the more of me you remember.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
