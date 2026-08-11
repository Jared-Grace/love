import { js_call_is } from "./js_call_is.mjs";
import { not } from "./not.mjs";
import { list_index_past_end_is } from "./list_index_past_end_is.mjs";
import { property_path_equals_2 } from "./property_path_equals_2.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_template_comment_text(template) {
  "The plain words of a comment written as a template literal, with every name that was substituted back in as text. Reading it out this way is what lets such a comment be written back as an ordinary string when the place it sits cannot hold anything more complicated.";
  "Only a substitution that is a call to the name wrapper is understood. Anything else in the holes would be real work being done, and turning that into text would be turning code into prose - so it is left for a person rather than guessed at.";
  "Whether a hole holds a call is asked before its parts are, because asking a thing that is not a call what it is calling throws rather than answering no. A hole holding a plain name - the local a comment binds above itself and then writes into the sentence - is ordinary and was crashing every reader of the file it sat in.";
  let quasis = property_get(template, "quasis");
  let expressions = property_get(template, "expressions");
  let pieces = [];
  function lambda(quasi) {
    let cooked = property_path_get_2(quasi, "value", "cooked");
    list_add(pieces, cooked);
    let index = list_index_of(quasis, quasi);
    let past = list_index_past_end_is(expressions, index);
    if (past) {
      return;
    }
    let expression = expressions[index];
    let call_is = js_call_is(expression);
    if (not(call_is)) {
      return;
    }
    let value = fn_name("fn_name");
    let wrapper_is = property_path_equals_2(
      expression,
      "callee",
      "name",
      value,
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
