import { arguments_assert } from "./arguments_assert.mjs";
import { function_part_name_cases } from "./function_part_name_cases.mjs";
import { property_get } from "./property_get.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_part_name_cases_gate_run() {
  "QA gate: the name a piece moved out of a function should stand under is worked out exactly as its corpus says, and is handed back as nothing for exactly the pairs of names the corpus says cannot say it.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = function_part_name_cases();
  function answer(c) {
    let f_name = property_get(c, "f_name");
    let nested = property_get(c, "nested");
    let named = function_part_name_or_null(f_name, nested);
    return named;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "named",
    "why",
    "function part name",
  );
  return r;
}
