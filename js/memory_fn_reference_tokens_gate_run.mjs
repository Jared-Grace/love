import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { memory_fn_reference_cases } from "./memory_fn_reference_cases.mjs";
import { memory_fn_reference_tokens } from "./memory_fn_reference_tokens.mjs";
import { property_get } from "./property_get.mjs";
export function memory_fn_reference_tokens_gate_run() {
  "Gate: each written-down piece of prose must give up exactly the pointers the corpus declares it holds. The sweep built on this reading walks the real memory folder, where every marked pointer resolves today, so a reader that had quietly stopped collecting anything would leave that sweep reporting a clean folder it never really read. Throws so the dispatcher seam exits nonzero.";
  let cases = memory_fn_reference_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let tokens = memory_fn_reference_tokens(text);
    return tokens;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "tokens",
    "why",
    "memory fn reference tokens",
  );
  return r;
}
