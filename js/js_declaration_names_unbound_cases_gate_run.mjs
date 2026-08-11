import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
import { js_declaration_names_unbound_cases } from "./js_declaration_names_unbound_cases.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_declaration_names_unbound_cases_gate_run() {
  "QA gate: each written-out function reaches out of itself for exactly the names the corpus says it does";
  "What this reading answers becomes the parameters of a moved function, so a name it walks past is a name the move never hands over. The moved function reads that word anyway, and where a repo function answers to it the imports are repaired around the mistake and everything downstream goes green";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_declaration_names_unbound_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let declaration = js_flo(ast);
    let unbound = js_declaration_names_unbound(declaration);
    return unbound;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "unbound",
    "name",
    "unbound names",
  );
  return r;
}
