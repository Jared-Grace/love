import { arguments_assert } from "./arguments_assert.mjs";
import { js_ast_return_key_shapes_disagreeing_cases } from "./js_ast_return_key_shapes_disagreeing_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_ast_return_key_shapes_disagreeing } from "./js_ast_return_key_shapes_disagreeing.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_ast_return_key_shapes_disagreeing_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: each written-down file yields exactly the disagreeing sets of keys the corpus says it does.");
  ("Nothing else can tell a working reading apart from a silent one. The gate built on this reading passes by finding nothing new, and the record it measures against would simply stop growing - so a reading that had stopped answering would look like a repo whose ways out all agree, while a rename rewrote a key in the dark.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = js_ast_return_key_shapes_disagreeing_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let shapes = js_ast_return_key_shapes_disagreeing(ast);
    return shapes;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "shapes",
    "name",
    "return key shapes",
  );
  return r;
}
