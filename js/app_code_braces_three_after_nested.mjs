import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_three_after_nested() {
  arguments_assert(arguments, 0);
  ("a program with three pairs of braces, an if inside an if and then an if after them both, so its braces stand { { } } { }; the if after asks the same name as the if inside, as in An if after an if inside an if, so where an if stands is the only difference between the two");
  let says = app_code_braces_three_says();
  let value = property_get(says, "say_joy");
  let if_b = js_code_if_lines_multiple("b", [value]);
  let value2 = property_get(says, "say_love");
  let statements = list_concat([value2], if_b);
  let outer = js_code_if_lines_multiple("a", statements);
  let value3 = property_get(says, "say_peace");
  let after = js_code_if_lines_multiple("b", [value3]);
  let lines = list_concat(outer, after);
  let code = list_join_newline(lines);
  return code;
}
