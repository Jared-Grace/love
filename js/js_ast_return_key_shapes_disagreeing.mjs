import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_return_key_shapes } from "./js_function_return_key_shapes.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_ast_return_key_shapes_disagreeing(ast) {
  arguments_assert(arguments, 1);
  ("$plain ast");
  ("The sets of keys answered with by any function in this file whose ways out do not all offer the same words - and an empty list when every function in it agrees with itself, which is the ordinary case.");
  ("EVERY FUNCTION WRITTEN IN THE FILE IS ASKED, not only the one the file is named for. A small function written inside another is answered to by the code around it in exactly the same way and can disagree with itself in exactly the same way.");
  ("A function that agrees with itself contributes nothing even when a function beside it answers with quite different words. Two functions are two things and are allowed to differ; the question here is only ever whether one function can be two things to its own caller.");
  let found = [];
  function function_visit(visited) {
    let node = property_get(visited, "node");
    let shapes = js_function_return_key_shapes(node);
    let several = greater_than(shapes.length, 1);
    if (several) {
      for (let one of shapes) {
        list_add(found, one);
      }
    }
  }
  js_visit_function_nodes(ast, function_visit);
  let r = list_unique(found);
  return r;
}
