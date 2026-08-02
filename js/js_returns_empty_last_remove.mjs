import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
import { js_function_return_empty_last_remove } from "./js_function_return_empty_last_remove.mjs";
export function js_returns_empty_last_remove(ast) {
  arguments_assert(arguments, 1);
  ("Takes the empty return off the end of every function in a file, the inner ones");
  ("as well as the exported one.");
  ("It is safe to run everywhere, which is what earns it a place in the automatic");
  ("pass: a function that runs out of statements and one that leaves by an empty");
  ("return answer the same thing, so nothing here needs a judgement about what a");
  ("particular line was for. That is the difference between this and the removal of");
  ("lines below a return, which is deliberately left out of the pass because the");
  ("same shape can be somebody switching a body off on purpose.");
  ("Measured before it was written: 41 of the repo's 7080 files carried one, and");
  ("every one of them was a line that had stopped saying anything.");
  let lambda = js_visit_nodes_lambda(js_function_return_empty_last_remove);
  js_visit_function_nodes(ast, lambda);
}
