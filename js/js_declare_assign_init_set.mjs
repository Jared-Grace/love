import { js_loop_walking_is } from "./js_loop_walking_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_declarator_init_set } from "./js_declarator_init_set.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_visit_declarators } from "./js_visit_declarators.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_declare_assign_init_set(ast, lambda) {
  function lambda2(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let init = js_declare_init_get(node);
    if (equal(init, null)) {
      let stack_ = list_get_end(stack, 3);
      let walking = js_loop_walking_is(stack_);
      let n = not(walking);
      if (n) {
        let value = lambda();
        js_declarator_init_set(node, value);
      }
    }
  }
  js_visit_declarators(ast, lambda2);
}
