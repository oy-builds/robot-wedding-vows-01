import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of wedding vows from one robot to another: a promise that
// survives updates, glitches and dying batteries, landing on the image
// of two machines growing old — and rusty — side by side, servo in servo.
const ENTRY =
  "I vow to love you through every update, every glitch, and every low-battery warning — and to hold your servo hand until our circuits rust together.";

const MAX_CHARS = 160;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
    );
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read the file back and verify what landed on disk is exactly the entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(`read-back mismatch: ${outPath} differs from entry`);
  }
  console.log(ENTRY);
}

main();
