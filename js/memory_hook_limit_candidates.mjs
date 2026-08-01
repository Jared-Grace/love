import { equal_not } from "./equal_not.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { add } from "./add.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { not } from "./not.mjs";
export async function memory_hook_limit_candidates() {
  "Index entries whose NOTE states a bound on its own advice but whose HOOK does not carry one - the excerpt defect, where the line loaded into every session keeps the licence and leaves the brake in the body. A truncated licence reads as an unconditional instruction, so this is the shape worth hunting. HEURISTIC and deliberately a REPORT, never a gate: whether a hook would surface its bound is a meaning question, and a gate claiming to answer it would be green while wrong. Expect false positives - the answer is a candidate list to read, not a defect list. Read-only.";
  let folder = memory_folder();
  let lines = await memory_index_lines();
  let body_markers = [
    "Guardrail",
    "guardrail",
    "GUARD on",
    "THE LIMIT",
    "NOT license",
    "not a rule",
    "only when",
    "only if",
    "premature",
    "is still premature",
    "one-off preference",
  ];
  let hook_markers = [
    "but ",
    "BUT",
    "NOT",
    "not ",
    "only",
    "unless",
    "≠",
    "first",
    "never",
    "premature",
    "don't",
    "CAN be",
    "except",
    "verify",
    "VERIFY",
  ];
  let entries = [];
  for (let line of lines) {
    let opener = "](";
    let at = line.indexOf(opener);
    let found = equal_not(at, -1);
    if (found) {
      let past = add(at, 2);
      let rest = line.slice(past);
      let close = rest.indexOf(")");
      let name = rest.slice(0, close);
      let is_md = text_ends_with(name, ".md");
      if (is_md) {
        let dash = line.indexOf(" — ");
        let has_hook = equal_not(dash, -1);
        if (has_hook) {
          let start = add(dash, 3);
          let hook = line.slice(start);
          let entry = {
            name,
            hook,
          };
          entries = entries.concat([entry]);
        }
      }
    }
  }
  let candidates = [];
  for (let entry of entries) {
    let note_path = path_join([folder, entry.name]);
    let body = await file_read(note_path);
    let body_bound = text_includes_multiple_is(body, body_markers);
    if (body_bound) {
      let hook_bound = text_includes_multiple_is(entry.hook, hook_markers);
      let lacks = not(hook_bound);
      if (lacks) {
        candidates = candidates.concat([entry.name]);
      }
    }
  }
  return candidates;
}
