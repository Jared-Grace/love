import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_four_if_else_in_else() {
  arguments_assert(arguments, 0);
  ("a program with four pairs of braces, an if and its else with an if and its else inside the else, so its braces stand { } { { } { } }; the program of If inside an else with an else given to the if inside");
  let says = app_code_braces_three_says();
  let value = property_get(says, "say_joy");
  let value2 = property_get(says, "say_peace");
  let inner = js_code_if_else_lines_multiple("b", [value], [value2]);
  let value3 = property_get(says, "say_love");
  let lines = js_code_if_else_lines_multiple("a", [value3], inner);
  let code = list_join_newline(lines);
  return code;
}
