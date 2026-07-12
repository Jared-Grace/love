import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_first } from "./list_first.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_dollar_a_generic } from "./js_dollar_a_generic.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
export function js_dollar_a({ stack_1, stack_2, ast, afters, remaining }) {
  let count = 1;
  let s = list_size_1(remaining);
  if (s) {
    let first = list_first(remaining);
    count = integer_to_try(first);
  }
  js_dollar_a_generic({
    stack_1,
    stack_2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack_1, next, stack_2, ast, declarations }) {
    list_remove_multiple(stack_2, [stack_1, next]);
    function lambda2(declaration) {
      let init = js_declare_init_get(declaration);
      let id = property_get(declaration, "id");
      let name = property_get(id, "name");
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
