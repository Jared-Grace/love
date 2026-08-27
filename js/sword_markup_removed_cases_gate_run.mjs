import { arguments_assert } from "./arguments_assert.mjs";
import { sword_markup_removed_cases } from "./sword_markup_removed_cases.mjs";
import { property_get } from "./property_get.mjs";
import { sword_markup_removed } from "./sword_markup_removed.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function sword_markup_removed_cases_gate_run() {
  "QA gate: a verse out of a Sword module comes to exactly the words its corpus says it does.";
  "This reading has no second opinion to be checked against. The eBible side reads every chapter twice and refuses to show one where the two readings disagree, so a mistake there ends in a chapter nobody sees; a mistake here ends in a tag standing in front of a person in the middle of a verse, and nothing else in the repo would notice.";
  "The closing marks are the whole reason it is worth a gate rather than a glance. They ride on the last verse of every chapter, so a reader that mishandles them is wrong eleven hundred and eighty nine times and right everywhere else - which reads as working.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = sword_markup_removed_cases();
  function answer(c) {
    let markup = property_get(c, "markup");
    let text = sword_markup_removed(markup);
    return text;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "text",
    "why",
    "sword markup removed",
  );
  return r;
}
