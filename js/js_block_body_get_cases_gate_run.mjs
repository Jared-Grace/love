import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_block_body_get_cases } from "./js_block_body_get_cases.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function js_block_body_get_cases_gate_run() {
  "QA gate: the statements standing inside a block come back by kind, in order, and anything that is not a block is stopped on, exactly as the corpus says.";
  "This is the half that does the stopping for every reading above it, so the corpus here says which half is speaking when one of those readings refuses.";
  "The empty block is the case that earns its keep: it answers with an empty list, which from above is indistinguishable from having found no block at all.";
  "Each statement is named by its kind, which says the right block was reached without saying anything about what is nested further down.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_block_body_get_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let statement = js_parse_statement(given);
      let statements = js_block_body_get(statement);
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
