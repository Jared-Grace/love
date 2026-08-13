import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { ebible_chapter_code_known_cases } from "./ebible_chapter_code_known_cases.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { ebible_chapter_code_suggestions } from "./ebible_chapter_code_suggestions.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_chapter_code_known_cases_gate_run() {
  "QA gate: each chapter code written down in the corpus is judged the way that corpus says, and offered back what it says";
  "This is what stands between a reader and a page of red text. A chapter code arrives from a link somebody typed or shortened by hand, and everything downstream of the judging assumes it names something - so a code let through wrong does not come back as a wrong chapter, it comes back as a lookup finding nothing and the page saying it did not finish loading.";
  "Throws so the dispatcher seam exits nonzero";
  arguments_assert(arguments, 0);
  let cases = ebible_chapter_code_known_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let known = ebible_chapter_code_known_is(code);
    let suggestions = ebible_chapter_code_suggestions(code);
    let a = {
      known: known,
      suggestions: suggestions,
    };
    return a;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "answer",
    "name",
    "chapter code",
  );
  return r;
}
