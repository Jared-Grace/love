import { property_get } from "./property_get.mjs";
import { memory_index_head_separated_cases } from "./memory_index_head_separated_cases.mjs";
import { memory_index_head_separated_is } from "./memory_index_head_separated_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function memory_index_head_separated_cases_gate_run() {
  "QA gate: each index head written down in the corpus is judged the way that corpus says.";
  "This is the one question standing between the index compressor and the human's own index, and a run of it that got the question wrong damaged three lines silently - the file still read as prose, so nothing announced it.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = memory_index_head_separated_cases();
  function answer(c) {
    let head = property_get(c, "head");
    let separated = memory_index_head_separated_is(head);
    return separated;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "separated",
    "why",
    "memory index head separated",
  );
  return r;
}
