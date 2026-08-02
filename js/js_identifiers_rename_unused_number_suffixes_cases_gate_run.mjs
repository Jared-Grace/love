import { property_js_parse } from "./property_js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_identifiers_rename_unused_number_suffixes_cases } from "./js_identifiers_rename_unused_number_suffixes_cases.mjs";
import { js_identifiers_rename_unused_number_suffixes } from "./js_identifiers_rename_unused_number_suffixes.mjs";
export function js_identifiers_rename_unused_number_suffixes_cases_gate_run() {
  "QA gate: taking the made-up numbers off a file's names changes exactly the names that file reads as values, and leaves every word that names a property alone.";
  "This pass runs over every file the repo canonicalizes, so a word it shortens by mistake is changed on disk and committed without anybody looking. Where the word named a property, the object being asked simply answers nothing, and the file keeps running.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_identifiers_rename_unused_number_suffixes_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    js_identifiers_rename_unused_number_suffixes(ast);
    let code = js_unparse(ast);
    return code;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "renamed",
    "name",
    "renamed number suffixes",
  );
  return r;
}
