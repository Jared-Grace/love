import { list_first } from "./list_first.mjs";
import { integer_to } from "./integer_to.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { marker } from "./marker.mjs";
import { js_dollar_a_generic } from "./js_dollar_a_generic.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_remove_all_multiple } from "./list_remove_all_multiple.mjs";
export function js_dollar_a({ stack1, stack2, ast, afters, remaining }) {
  let count = 1;
  let s1 = list_size_1(remaining);
  if (s1) {
    let first = list_first(remaining);
    count = integer_to(first);
  }
  marker("1");
  js_dollar_a_generic({
    stack1,
    stack2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack1, next, stack2, ast, declarations }) {
    list_remove_all_multiple([stack1, next], stack2);
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
