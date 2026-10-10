import { function_identifier_replace_lambda_cases } from "./function_identifier_replace_lambda_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_identifier_replace_lambda_cases_gate_run() {
  "QA gate: replacing add in each written-down file gives exactly the file the corpus says it becomes.";
  "A replacement that reaches a property name commits a file that still parses and throws the first time the line runs, so nothing but a case like these says it went wrong before it ships.";
  "It asks the one lambda every identifier rename goes through, so the checked rename, the typed command and the parameter rename are all held to it at once.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = function_identifier_replace_lambda_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let replace = function_identifier_replace_lambda("add", c.replacement);
    replace(ast);
    let after = js_unparse(ast);
    return after;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "after",
    "name",
    "replaced code",
  );
  return r;
}
