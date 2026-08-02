import { property_js_parse } from "./property_js_parse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_query_key_getters_cases } from "./js_query_key_getters_cases.mjs";
import { js_query_key_getters } from "./js_query_key_getters.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_query_key_getters_cases_gate_run() {
  "QA gate: each written-down file yields exactly the field-name functions the corpus says it does.";
  "The gate built on this reading passes by finding nothing unfrozen, and a reading that had stopped reaching the query part finds nothing at all - so without a written-down file that must come back with something, the two look the same. That is not a guess: for the part after the hash, reading only the shape a person writes and not the shape the canonicalizing pass leaves behind found nothing on every routed file in this repo while looking perfectly healthy.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_query_key_getters_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let getters = js_query_key_getters(ast);
    return getters;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "getters",
    "why",
    "query key getters",
  );
  return r;
}
