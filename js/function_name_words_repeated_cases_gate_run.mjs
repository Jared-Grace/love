import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_words_repeated_cases } from "./function_name_words_repeated_cases.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_words_repeated_is } from "./function_name_words_repeated_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_name_words_repeated_cases_gate_run() {
  "QA gate: a name is called doubled for exactly the reasons its corpus writes down, and left alone for exactly the reasons it writes down as well.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = function_name_words_repeated_cases();
  function answer(c) {
    let f_name = property_get(c, "f_name");
    let repeated = function_name_words_repeated_is(f_name);
    return repeated;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "repeated",
    "why",
    "function name words repeated",
  );
  return r;
}
