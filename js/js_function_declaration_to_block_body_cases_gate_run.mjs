import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_function_declaration_to_block_body_cases } from "./js_function_declaration_to_block_body_cases.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_declaration_to_block_body_cases_gate_run() {
  "QA gate: the statements standing in a function's body come back by kind, in order, and anything that is not a function is stopped on, exactly as the corpus says.";
  "Each statement is named by its kind, which says the right body was reached without saying anything about what is nested further down.";
  "Both ways of stopping are caught together, since the corpus fixes that it stops and not which of the two moves inside complains.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_function_declaration_to_block_body_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let declaration = js_parse_statement(given);
      let statements = js_function_declaration_to_block_body(declaration);
      let kinds = list_map(statements, js_node_type);
      return kinds;
    } catch (e) {
      let refused = "refused";
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "statements", "name", "code");
  return r;
}
