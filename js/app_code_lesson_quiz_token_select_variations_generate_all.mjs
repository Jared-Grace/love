import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_quiz_token_select_variations_generate_all(
  la,
  tree,
  orderable_nodes,
) {
  arguments_assert(arguments, 3);
  ("the cartesian product: for each node try every one of its orderings, recursing on the rest, then restore that node - so every combination is emitted and the tree ends as it began");
  function generate(nodes) {
    let none_left = list_empty_is(nodes);
    if (none_left) {
      let code_variation = js_unparse(tree);
      la(code_variation);
    } else {
      let split = list_first_remaining(nodes);
      let first = property_get(split, "first");
      let remaining = property_get(split, "remaining");
      let orderings = property_get(first, "orderings");
      function try_ordering(ordering) {
        ordering();
        generate(remaining);
      }
      each(orderings, try_ordering);
      let restore = property_get(first, "restore");
      restore();
    }
  }
  generate(orderable_nodes);
}
