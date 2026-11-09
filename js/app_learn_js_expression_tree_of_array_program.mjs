import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_single } from "./list_single.mjs";
import { list_map } from "./list_map.mjs";
import { list_last } from "./list_last.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { property_set } from "./property_set.mjs";
import { app_learn_js_expression_from_js } from "./app_learn_js_expression_from_js.mjs";
export function app_learn_js_expression_tree_of_array_program(code) {
  arguments_assert(arguments, 1);
  ('the shape behind the last line of a two-line array program, read with the array its first line names: let a = ["love", "joy", "peace"]; then console.log(a[a.length - 1]); gives back the item read at a.length - 1, with a.length still to be read');
  ("The array is read out of the program rather than kept beside it, for the reason the plain reader gives: a quiz hands its question over as text, and a line outlives the run that built it.");
  ("A last line that writes something out is read for what it writes out, so the twin's own programs are read as they stand.");
  let program = js_parse(code);
  let body = property_get(program, "body");
  let head = list_first(body);
  let declarations = property_get(head, "declarations");
  let declarator = list_single(declarations);
  let id = property_get(declarator, "id");
  let name = property_get(id, "name");
  let init = property_get(declarator, "init");
  let elements = property_get(init, "elements");
  function element_value(element) {
    let value = property_get(element, "value");
    return value;
  }
  let items = list_map(elements, element_value);
  let last = list_last(body);
  let expression = property_get(last, "expression");
  let callee = property_get_or(expression, "callee", null);
  let called = null_not_is(callee);
  if (called && equal(js_unparse(callee), "console.log")) {
    let logged_arguments = property_get(expression, "arguments");
    expression = list_single(logged_arguments);
  }
  let values = {};
  property_set(values, name, items);
  let whole = app_learn_js_expression_from_js(expression, values);
  return whole;
}
