import { memory_symbols_baseline_path } from "./memory_symbols_baseline_path.mjs";
import { memory_symbol_references_judged } from "./memory_symbol_references_judged.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function memory_symbols_baseline_write() {
  "Rewrite the baseline from what memory carries right now. For seeding it once, for shrinking it after a name has been fixed, and - unlike the shadowing ratchet next door - for recording a new name that turns out to be innocent.";
  "That difference is deliberate and is the whole reason growth is not refused here. A name that shadows another is always a fault, so that ratchet can turn one way only. A call-shaped name in a note is a fault only sometimes: prose quotes its own callbacks, records what something used to be called, and names things written in other languages. Refusing to write those down would leave the gate red with no honest way to clear it, and a gate nobody can clear is one people learn to skip.";
  "What keeps it from becoming a place to dump things is that the file is small, changes rarely, and every addition shows up as its own line in a commit somebody can ask about.";
  let known = await memory_symbol_references_judged();
  ("the sort is in place, so the list itself is what gets written - what it hands back is that same list, not a copy");
  list_sort_text(known);
  let path = memory_symbols_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
