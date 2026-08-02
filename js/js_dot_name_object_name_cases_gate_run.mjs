import { property_js_parse } from "./property_js_parse.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_dot_name_object_name_cases } from "./js_dot_name_object_name_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_dot_name_object_name_try } from "./js_dot_name_object_name_try.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_dot_name_object_name_cases_gate_run() {
  "QA gate: each written-out expression reads the name of exactly the thing the corpus says it does.";
  "Nothing else tells a working reading apart from a silent one. Everything built on this reading passes by finding nothing, so a reading that had stopped answering would look like a repo where no function's name is ever spelled as a word - while the names that are spelled that way go on unwatched.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_dot_name_object_name_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let body = property_get(ast, "body");
    let expression = list_first_property(body, "expression");
    let object = js_dot_name_object_name_try(expression);
    return object;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "object",
    "why",
    "dot name object name",
  );
  return r;
}
