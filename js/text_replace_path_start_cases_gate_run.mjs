import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_path_start_cases } from "./text_replace_path_start_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace_path_start } from "./text_replace_path_start.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_replace_path_start_cases_gate_run() {
  "QA gate: renaming a folder where a path starts with it changes exactly the writing its corpus says it does, and leaves alone exactly the writing it says to leave alone.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = text_replace_path_start_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let before = property_get(c, "before");
    let after = property_get(c, "after");
    let written = text_replace_path_start(text, before, after);
    return written;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "written",
    "why",
    "text replace path start",
  );
  return r;
}
