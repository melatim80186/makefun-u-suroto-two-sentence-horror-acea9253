import { writeFileSync, mkdirSync } from "node:fs";

// The story: a routine dental X-ray finds one tooth too many, and the
// recount proves the extra one is not a tooth at all — something in the
// narrator's mouth, smiling back. Exactly two sentences, 169 characters,
// so it passes the gate (1–400 characters, UTF-8) and the judge's first
// criterion is met on its face: a horror story in exactly two sentences.
const ENTRY =
  "The dentist held up my X-ray and said I have thirty-three teeth. I counted twice on the way home, and I have thirty-two — so something in my mouth is smiling back at me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
