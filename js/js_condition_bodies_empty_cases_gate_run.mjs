import { js_condition_bodies_empty_cases } from "./js_condition_bodies_empty_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_condition_bodies_empty } from "./js_condition_bodies_empty.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_condition_bodies_empty_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "What this guards against is a reader that quietly stops finding anything. The";
  "sweep above it ratchets against zero, so a reader that answered with nothing";
  "whatever it was given would print a clean run of the very check that exists to";
  "catch what it stopped seeing. Only a written-down case can tell those apart.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_condition_bodies_empty_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let empties = js_condition_bodies_empty(ast);
    return empties;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "empties",
    "why",
    "condition bodies empty",
  );
  return r;
}
