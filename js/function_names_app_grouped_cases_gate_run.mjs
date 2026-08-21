import { arguments_assert } from "./arguments_assert.mjs";
import { function_names_app_grouped_cases } from "./function_names_app_grouped_cases.mjs";
import { property_get } from "./property_get.mjs";
import { function_names_app_grouped } from "./function_names_app_grouped.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_names_app_grouped_cases_gate_run() {
  ("QA gate: sorting function names under the apps that own them gives back exactly the piles its corpus says it does.");
  ("This is the judging every promotion into the shared namespace rests on. Which apps appear in the answer, and how much of each, is the whole of what decides whether a move is a rename or a design question - and the answer is trusted before anything runs, so there is no later step where a wrong one would be caught.");
  ("It is worth a gate rather than a reading because the reading is what already failed. The filtering used to be done by eye over a printed list, the list had been shortened for the screen, and the answer came back a fifth of its true size - which is exactly the shape that makes an unsafe move look proved.");
  ("Throws so the dispatcher seam exits nonzero.");
  arguments_assert(arguments, 0);
  let cases = function_names_app_grouped_cases();
  function answer(c) {
    let f_names = property_get(c, "f_names");
    let app_names = property_get(c, "app_names");
    let owned = function_names_app_grouped(f_names, app_names);
    return owned;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "owned",
    "why",
    "function names app grouped",
  );
  return r;
}
