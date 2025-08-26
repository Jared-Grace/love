import { each_range } from "./each_range.mjs";
import { list_add } from "./list_add.mjs";
import { list_next } from "./list_next.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_dollar_a_generic({
  stack1,
  stack2,
  afters,
  lambda,
  ast,
  count,
}) {
  if (js_node_type_is(stack1, "ExpressionStatement")) {
    let l = list_is(stack2);
    if (l) {
      let next = stack1;
      function lambda3() {
        next = list_next(stack2, next);
        let type_is = js_node_type_is(next, "VariableDeclaration");
        if (type_is) {
          let { declarations } = next;
          list_add(afters, after);
          function after() {
            lambda({
              stack1,
              next,
              stack2,
              ast,
              declarations,
            });
          }
        }
      }
      each_range(count, lambda3);
    }
  }
}
