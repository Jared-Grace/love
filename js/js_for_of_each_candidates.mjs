import { property_equals } from "./property_equals.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_for_of_each_blockers } from "./js_for_of_each_blockers.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function js_for_of_each_candidates(ast) {
  arguments_assert(arguments, 1);
  ("Every walking loop in this tree that nothing known stands in the way of writing as a call to the repo's own walk, each named by the word it walks with.");
  ("★ IT SAYS CANDIDATE AND NOT SAFE. What it has checked is that the body holds no jump the walk cannot carry and that the thing walked is not plainly something other than a list; what it has not checked, and from the tree alone cannot, is that the thing walked really is a list. A name standing there is a name whose value this tree does not hold.");
  ("So it is a reading and not a rewriting. What it is for is saying how large the prize is before anything is built - a step that could reach a handful of loops is not worth a transform, and one that could reach hundreds is.");
  let loops = js_list_types_nodes(ast, ["ForOfStatement"]);
  let candidates = [];
  function each_loop(loop) {
    let blockers = js_for_of_each_blockers(loop);
    let blocked = list_empty_not_is(blockers);
    if (blocked) {
      return;
    }
    let left = property_get(loop, "left");
    let declared = property_equals(left, "type", "VariableDeclaration");
    if (not(declared)) {
      return;
    }
    let declarations = property_get(left, "declarations");
    let id = list_first_property(declarations, "id");
    let named = property_equals(id, "type", "Identifier");
    if (not(named)) {
      return;
    }
    let name = property_get(id, "name");
    list_add(candidates, name);
  }
  each(loops, each_loop);
  return candidates;
}
