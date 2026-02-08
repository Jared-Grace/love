import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_dollar_a_generic } from "../../../love/public/src/js_dollar_a_generic.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
export function js_dollar_a({ stack1, stack2, ast, afters, remaining }) {
  let count = 1;
  let s1 = list_size_1(remaining);
  if (s1) {
    let function_copy_replace_first = list_first(remaining);
    count = integer_to_try(function_copy_replace_first);
  }
  js_dollar_a_generic({
    stack1,
    stack2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack1, next, stack2, ast, declarations }) {
    list_remove_multiple(stack2, [stack1, next]);
    function lambda2(declaration) {
      let init = object_property_get(declaration, "init");
      let id = object_property_get(declaration, "id");
      let name = object_property_get(id, "name");
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
