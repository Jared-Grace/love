import { permission_grant_param_scripture_code_cases } from "./permission_grant_param_scripture_code_cases.mjs";
import { permission_grant_param_scripture_code_is } from "./permission_grant_param_scripture_code_is.mjs";
import { property_get } from "./property_get.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function permission_grant_param_scripture_code_gate_run() {
  "QA gate: the one reading in the permission system that clears a refusal answers every name the corpus writes down the way that corpus says.";
  "A refusal written wrongly costs a prompt and is noticed. A refusal cleared wrongly is silent, and what it leaves behind is a standing rule covering every argument that function will ever be handed. So this is checked against written-down answers rather than against the repository as it stands, which changes underneath it.";
  "Widening the word list is the change this is here to catch. Adding a word is one line and reads as harmless, and the corpus is where the names it must go on refusing are kept.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = permission_grant_param_scripture_code_cases();
  function answer(c) {
    let p_name = property_get(c, "p_name");
    let scripture = permission_grant_param_scripture_code_is(p_name);
    return scripture;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "scripture",
    "why",
    "scripture code parameter",
  );
  return r;
}
