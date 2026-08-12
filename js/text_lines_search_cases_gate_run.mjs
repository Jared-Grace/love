import { arguments_assert } from "./arguments_assert.mjs";
import { text_lines_search_cases } from "./text_lines_search_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_lines_search } from "./text_lines_search.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_lines_search_cases_gate_run() {
  "QA gate: searching a text for a word gives back exactly the lines its corpus says it does, at exactly the places it says.";
  "This is the bottom of the searching this repo does without asking the machine to search. Everything above it - one file, a whole folder - adds only reading and gathering, so a change in meaning here changes the answer to every search made anywhere, and nothing else would notice.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = text_lines_search_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let s = property_get(c, "s");
    let found = text_lines_search(text, s);
    return found;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "found",
    "why",
    "text lines search",
  );
  return r;
}
