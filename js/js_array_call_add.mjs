import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { list_add } from "./list_add.mjs";
export async function js_array_call_add(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Adds one call to a named function at the end of an ordered register of values.");
  ("The register family could add a word and a name; a call is the third thing an");
  ("entry is made of, and the one a list of built values wants, where each entry is");
  ("what a function hands back rather than the function itself.");
  ("Adding a word and then pointing it at the call would say the same thing in two");
  ("commands, and the first is refused outright by a list that holds no words.");
  let elements = js_selects_array_elements(ast, selects);
  let expression = await js_call_new_expression(f_name, ast);
  list_add(elements, expression);
}
