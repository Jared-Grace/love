import { js_declare_init_get } from "../../../love/public/src/js_declare_init_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_size_ } from "../../../love/public/src/list_size_1.mjs";
import { js_dollar_a_generic } from "../../../love/public/src/js_dollar_a_generic.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
export function js_dollar_a({ stack_, stack_2, ast, afters, remaining }) {
  let count = 1;
  let s = list_size_(remaining);
  if (s) {
    let first = list_first(remaining);
    count = integer_to_try(first);
  }
  js_dollar_a_generic({
    stack_,
    stack_2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack_, next, stack_2, ast, declarations }) {
    list_remove_multiple(stack_2, [stack_, next]);
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
