import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_call_arguments_get_cases } from "./js_call_arguments_get_cases.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_arguments_get_cases_gate_run() {
  "QA gate: the things handed over in a call come back by kind, in the order they are written, and anything that is not a call is stopped on, exactly as the corpus says.";
  "Each thing is named by its kind, which says the right arguments were reached without saying anything about what is nested inside them.";
  "A stop is answered with a word rather than with an empty list, since a call with nothing in its brackets already answers with one and the two mean opposite things.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_call_arguments_get_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let expression = js_parse_expression(given);
      let args = js_call_arguments_get(expression);
      let kinds = list_map(args, js_node_type);
      return kinds;
    } catch (e) {
      let refused = "refused";
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "kinds", "name", "code");
  return r;
}
