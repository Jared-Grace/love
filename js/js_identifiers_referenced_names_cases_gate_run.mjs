import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_identifiers_referenced_names_cases } from "./js_identifiers_referenced_names_cases.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_identifiers_referenced_names_cases_gate_run() {
  "QA gate: each written-down file mentions exactly the names the corpus says it mentions.";
  "This is the side of the free-name question everything else is subtracted from. A name this";
  "reading stops seeing can never come out free, so the import it wanted is never added and";
  "the file is committed short of it - while a name it wrongly sees is an import added for a";
  "word that was only ever the name of a property.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_identifiers_referenced_names_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let referenced = js_identifiers_referenced_names(ast);
    return referenced;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "referenced",
    "name",
    "referenced names",
  );
  return r;
}
