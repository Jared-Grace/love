import { app_code_lesson_quiz_token_select_meaning_variations_cases } from "./app_code_lesson_quiz_token_select_meaning_variations_cases.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_token_select_value_variations } from "./app_code_lesson_quiz_token_select_value_variations.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function app_code_lesson_quiz_token_select_meaning_variations_cases_gate_run() {
  "QA gate: every line the corpus writes down is offered exactly the orderings it says.";
  "Nothing else in the repo can catch this. A wrong set of orderings is not an error and does not fail to build - the quiz marks a learner right where it should mark them wrong, or wrong where it should mark them right, and the only place that shows is in front of the learner.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = app_code_lesson_quiz_token_select_meaning_variations_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let variations = app_code_lesson_quiz_token_select_value_variations(code);
    return variations;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "variations",
    "why",
    "code lesson unscramble orderings",
  );
  return r;
}
