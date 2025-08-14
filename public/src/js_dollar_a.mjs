import { js_dollar_a_generic } from "./js_dollar_a_generic.mjs";
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
  js_dollar_a_generic({
    stack1,
    stack2,
    afters,
    lambda,
    ast,
  });
  function lambda({ stack1, next, stack2, ast, declarations }) {
    list_remove_multiple([stack1, next], stack2);
    function lambda2(declaration) {
      let { id, init } = declaration;
      let { name } = id;
      let is = js_identifiers_named(ast, name);
      function lambda3(item) {
        let replacement = object_copy(init);
        object_replace(item, replacement);
      }
      each(is, lambda3);
    }
    each(declarations, lambda2);
  }
}
