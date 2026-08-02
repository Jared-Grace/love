import { property_path_equals_2 } from "./property_path_equals_2.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_template_comment_text(template) {
  "The plain words of a comment written as a template literal, with every name that was substituted back in as text. Reading it out this way is what lets such a comment be written back as an ordinary string when the place it sits cannot hold anything more complicated.";
  "Only a substitution that is a call to the name wrapper is understood. Anything else in the holes would be real work being done, and turning that into text would be turning code into prose - so it is left for a person rather than guessed at.";
  let quasis = property_get(template, "quasis");
  let expressions = property_get(template, "expressions");
  let pieces = [];
  function lambda(quasi) {
    let cooked = property_path_get_2(quasi, "value", "cooked");
    list_add(pieces, cooked);
    let index = list_index_of(quasis, quasi);
    let size = list_size(expressions);
    let past = greater_than_equal(index, size);
    if (past) {
      return;
    }
    let expression = expressions[index];
    let wrapper_is = property_path_equals_2(
      expression,
      "callee",
      "name",
      fn_name("fn_name"),
    );
    if (wrapper_is) {
      let args = property_get(expression, "arguments");
      let first = args[0];
      let value_ = property_get(first, "value");
      list_add(pieces, value_);
    }
  }
  each(quasis, lambda);
  let empty = "";
  let text = list_join(pieces, empty);
  return text;
}
