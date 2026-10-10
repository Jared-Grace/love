import { js_identifier_rename_references_cases } from "./js_identifier_rename_references_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_identifier_rename_references } from "./js_identifier_rename_references.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_identifier_rename_references_cases_gate_run() {
  "QA gate: renaming add to adder in each written-down file gives exactly the file the corpus says it becomes.";
  "A rename that reaches a property name commits a file that still parses and throws the first time the line runs, so nothing but a case like these says it went wrong before it ships.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_identifier_rename_references_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    js_identifier_rename_references(ast, "add", "adder");
    let after = js_unparse(ast);
    return after;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "after",
    "name",
    "renamed code",
  );
  return r;
}
