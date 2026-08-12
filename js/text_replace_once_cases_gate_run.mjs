import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_once_cases } from "./text_replace_once_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { catch_null } from "./catch_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_replace_once_cases_gate_run() {
  "QA gate: a replacement of one place changes exactly the run its corpus says it does, and refuses exactly the ones it says must be refused.";
  "A refusal is caught here and read as nothing rather than being let through, so that the cases which must be refused and the cases which must succeed can be written down side by side in one corpus. What is being checked is which of the two happened, and that is the whole of what this function promises.";
  "The refusals are the half that would rot unnoticed. A replacement that succeeded wrongly leaves a changed file somebody will eventually read; a refusal that stopped being made leaves nothing at all to look at, and the first sign of it is a file written back identical to itself while everything downstream reports success.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = text_replace_once_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let from = property_get(c, "from");
    let to = property_get(c, "to");
    function lambda() {
      let replaced = text_replace_once(text, from, to);
      return replaced;
    }
    let after = catch_null(lambda);
    return after;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "after",
    "why",
    "text replace once",
  );
  return r;
}
