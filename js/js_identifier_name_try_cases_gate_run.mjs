import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { equal } from "./equal.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_identifier_name_try_cases } from "./js_identifier_name_try_cases.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
export function js_identifier_name_try_cases_gate_run() {
  "QA gate: the name-reading gets the name out of a name and nothing out of everything else, exactly as the corpus says.";
  "It is asked about whatever a caller is holding, so nothing has to come back as an answer rather than as a stop, and a name coming back where none was asked for is the direction that hurts - callers treat a name as proof they are holding one.";
  "A case whose code is nothing is handed over as nothing; every other case is parsed first.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_identifier_name_try_cases();
  function thing_get(c) {
    let given = property_get(c, "code");
    let absent = equal(given, null);
    if (absent) {
      return given;
    }
    let parsed = js_parse_expression(given);
    return parsed;
  }
  function answer(c) {
    let thing = thing_get(c);
    let named = js_identifier_name_try(thing);
    return named;
  }
  let r = cases_gate_run_generic(cases, answer, "named", "name", "code");
  return r;
}
