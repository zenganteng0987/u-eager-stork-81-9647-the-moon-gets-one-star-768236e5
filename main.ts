import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. Works nights only, takes two weeks off every month, and still acts like the whole sky revolves around it.";

// Fail loudly instead of shipping an entry the gate would refuse.
if ([...review].length < 1 || [...review].length > 120) {
  throw new Error(`review is ${[...review].length} characters, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
