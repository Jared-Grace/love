import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_parse_expression_cases } from "./js_parse_expression_cases.mjs";
import { property_get } from "./property_get.mjs";
export function js_parse_expression_cases_gate_run() {
  "QA gate: a written-out expression is read in as the kind the corpus names, and text that is not one expression is refused.";
  "Only the kind is asked for, since what stands inside the expression belongs to the readings above this one. What this one owes is that the text was accepted and that the right thing came back out of the line built round it.";
  "The answer is wrapped so that a refusal cannot be mistaken for the name of a kind - both would otherwise be a word, and the two mean opposite things.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_parse_expression_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let expression = js_parse_expression(given);
      let kind = js_node_type(expression);
      let told = {
        kind,
      };
      return told;
    } catch (e) {
      let refused = {
        refused: true,
      };
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "told", "name", "code");
  return r;
}
