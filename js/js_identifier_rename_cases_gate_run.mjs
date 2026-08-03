import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_identifier_rename_cases } from "./js_identifier_rename_cases.mjs";
export function js_identifier_rename_cases_gate_run() {
  "QA gate: moving a name moves every word that reads the value and no word that names a property or a key";
  "This is the one pass every rename in the repo goes through, and the harm it can do is silent. A word after a dot that is moved by mistake asks the object for something it does not have, and the answer is nothing rather than an error, so nothing is said and the file keeps running";
  "The cases carry both halves on purpose. A pass that moved nothing would leave the word after a dot alone and fail every case that must move; a pass that moved everything would move each value and fail the two that must stay";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_identifier_rename_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let name_from = property_get(c, "from");
    let name_to = property_get(c, "to");
    js_identifier_rename(ast, name_from, name_to);
    let code = js_unparse(ast);
    return code;
  }
  let r = cases_gate_run_generic(cases, answer, "renamed", "name", "renamed");
  return r;
}
