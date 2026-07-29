import { memory_symbol_references_judged } from "./memory_symbol_references_judged.mjs";
import { memory_symbols_baseline_read } from "./memory_symbols_baseline_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { memory_symbols_baseline_write } from "./memory_symbols_baseline_write.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
export async function memory_symbol_gate_run() {
  "Gate: a memory note may not newly name a function that does not exist. Measured against the baseline, so what was already written stays green and what is written from now on is held to it. Throws so the dispatcher seam exits nonzero.";
  "The worst thing a note can do is instruct: a line telling a Claude to call something that has never existed costs a search that finds nothing and then a wrong belief about what the repo has. That is what this catches early, while whoever wrote it still remembers what they meant.";
  let current = await memory_symbol_references_judged();
  let path = memory_symbols_baseline_path();
  let hint = text_combine_multiple([
    "a note now names these, which no function answers to - is it a name that moved, or one that never existed? Fix the note, or record it with ",
    memory_symbols_baseline_write.name,
    " if the prose meant something other than repo code",
  ]);
  let r = await baseline_names_gate_generic(
    current,
    path,
    hint,
    memory_symbols_baseline_write.name,
  );
  return r;
}
