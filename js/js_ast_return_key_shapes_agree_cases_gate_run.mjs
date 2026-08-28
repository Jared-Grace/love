import { arguments_assert } from "./arguments_assert.mjs";
import { js_ast_return_key_shapes_agree_cases } from "./js_ast_return_key_shapes_agree_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_ast_return_key_shapes_agree } from "./js_ast_return_key_shapes_agree.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_ast_return_key_shapes_agree_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the mend turns each written-down file into exactly the file the corpus says it should.");
  ("The reading that finds these functions is proved next door. This proves the writing, which is the half that edits the repo - it widened twenty-four functions' records in one pass, and a mend that had started naming keys in the wrong record, or naming one twice, would have left the gate it serves green either way, because a record with too many words agrees with the others just as well as a record with the right ones.");
  ("The whole file is compared rather than the sets of keys, because the sets are what the mend was aiming at and would agree with themselves. What a caller actually receives is the file, so the file is what is held against the corpus - the word added, where it was added, and that it holds nothing.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = js_ast_return_key_shapes_agree_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    js_ast_return_key_shapes_agree(ast);
    let after = js_unparse(ast);
    return after;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "after",
    "name",
    "return key shapes agreed",
  );
  return r;
}
