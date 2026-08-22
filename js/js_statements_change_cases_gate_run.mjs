import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_change_cases } from "./js_statements_change_cases.mjs";
import { js_statements_change_named } from "./js_statements_change_named.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_statements_change_cases_gate_run() {
  "QA gate: an edit to a run of statements is named for exactly the reasons its corpus writes down.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_statements_change_cases();
  function answer(c) {
    let before_text = property_get(c, "before");
    let after_text = property_get(c, "after");
    let before = list_map(before_text, js_parse_statement);
    let after = list_map(after_text, js_parse_statement);
    let named = js_statements_change_named(before, after);
    return named;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "named",
    "why",
    "js statements change named",
  );
  return r;
}
