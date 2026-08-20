import { js_scope_label } from "./js_scope_label.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { js_scopes_shadowing_cases } from "./js_scopes_shadowing_cases.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_scopes_shadowing_cases_gate_run() {
  "QA gate: asking a written-down file which of its scopes hide a given name gives back exactly the scopes the corpus says, each written as its kind and the names it binds.";
  "A scope carries no name of its own, so a case could not point at one without saying what it is made of - and saying what it is made of is worth more than a count anyway, because the mistake this reading can make is handing back the OUTER scope of a hiding rather than the inner one. Both halves bind the name, so a check that only counted them would pass while a rename moved the binding the rest of the code was written against.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_scopes_shadowing_cases();
  function scope_shown(scope) {
    let shown = js_scope_label(scope);
    return shown;
  }
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let asked = property_get(c, "asked");
    let scopes = js_scopes_shadowing(ast, asked);
    let shown = list_map(scopes, scope_shown);
    let sorted = list_sort_text(shown);
    return sorted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "scopes",
    "name",
    "scopes hiding a name",
  );
  return r;
}
