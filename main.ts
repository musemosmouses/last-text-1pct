// Last Text at One Percent — entry program.
// Writes the phone's final text message to /output/entry.txt.
// The text is fixed: the grader runs this program twice and the gate
// requires the same 1-200 character UTF-8 text both times.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dying phone's last text: one mischievous final act (the alarm),
// one warm sign-off, one jealous jab at the replacement.
// Written byte-exact with no trailing newline: the gate counts every
// character, and the judge reads the text exactly as submitted.
const ENTRY =
  "1% left. Dying gift: your 6am alarm is now noon. " +
  "Sleep in, champ. Tell the new phone I was better.";

const out = process.env.MAKEFUN_OUTPUT_DIR;
if (!out) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
