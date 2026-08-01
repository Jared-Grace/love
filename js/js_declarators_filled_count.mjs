import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { js_visit_declarators } from "./js_visit_declarators.mjs";
import { not } from "./not.mjs";
export function js_declarators_filled_count(ast) {
  arguments_assert(arguments, 1);
  ("how many declarations in a tree have something on the right of them");
  let count = 0;
  function lambda(v) {
    let node = property_get(v, "node");
    let init = js_declare_init_get(node);
    let b = null_is(init);
    let filled = not(b);
    if (filled) {
      count = add(count, 1);
    }
  }
  js_visit_declarators(ast, lambda);
  return count;
}
