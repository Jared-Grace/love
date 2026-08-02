import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { memory_pointer_cases } from "./memory_pointer_cases.mjs";
import { memory_pointer_tokens } from "./memory_pointer_tokens.mjs";
import { property_get } from "./property_get.mjs";
export function memory_pointer_gate_run() {
  "Gate: the written-down index lines must each yield the file names the corpus declares. The sweep built on this reading walks the real index, where a right answer and a broken one both come back empty today, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  let cases = memory_pointer_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let targets = memory_pointer_tokens(text);
    return targets;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "targets",
    "why",
    "memory pointer",
  );
  return r;
}
