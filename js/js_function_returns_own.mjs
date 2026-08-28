import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function js_function_returns_own(function_node) {
  arguments_assert(arguments, 1);
  ("$plain function_node");
  ("The returns that are this function's own answer - the ones a caller of it receives - with the returns of every function written inside it left out.");
  ("A RETURN INSIDE A CALLBACK IS NOT THIS FUNCTION ANSWERING. A function that maps a list holds a small function that answers once per item, and a plain list of every return under the outer one mixes those two voices into one. Anything comparing the answers a function can give would then be comparing an answer to a caller against an answer to a loop, and would report a disagreement between two things that were never meant to agree.");
  ("Written as a subtraction rather than a walk that stops at each nested function, because the walk that lists a type is already here and is already trusted, and the nested functions are already listable. A second walker that had to know where to stop would be a second thing able to disagree with the first about what is inside what.");
  let mine = js_list_type_nodes(function_node, "ReturnStatement");
  let inner = [];
  function function_visit(visited) {
    let node = property_get(visited, "node");
    let same = equal(node, function_node);
    if (same) {
      return;
    }
    let nested = js_list_type_nodes(node, "ReturnStatement");
    for (let one of nested) {
      list_add(inner, one);
    }
  }
  js_visit_function_nodes(function_node, function_visit);
  function outer_is(one) {
    let outside = list_includes_not(inner, one);
    return outside;
  }
  let r = mine.filter(outer_is);
  return r;
}
