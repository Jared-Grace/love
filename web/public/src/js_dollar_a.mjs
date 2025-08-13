import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { log } from "./log.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_next } from "./list_next.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_dollar_a({ stack1, stack2, ast, afters }) {
  if (js_node_type_is(stack1, "ExpressionStatement")) {
    let l = list_is(stack2);
    if (l) {
      let next = list_next(stack2, stack1);
      let type_is = js_node_type_is(next, "VariableDeclaration");
      let { declarations } = next;
      if (type_is) {
        list_add(afters, after);
        function after() {
          list_remove_multiple([stack1, next], stack2);
          function lambda2(declaration) {
            let { id, init } = declaration;
            let { name } = id;
            let is = js_identifiers_named(ast, name);
            function lambda3(item) {
              let replacement = object_copy(init);
              log({
                item,
                replacement,
              });
              object_replace(item, replacement);
            }
            each(is, lambda3);
          }
          each(declarations, lambda2);
        }
      }
    }
  }
}
