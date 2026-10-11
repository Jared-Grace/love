import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_three_if_else_in_if() {
  arguments_assert(arguments, 0);
  ("a program with three pairs of braces, an if and its else inside an if, so its braces stand { { } { } }");
  let says = app_code_braces_three_says();
  let value = property_get(says, "say_joy");
  let value2 = property_get(says, "say_peace");
  let inner = js_code_if_else_lines_multiple("b", [value], [value2]);
  let value3 = property_get(says, "say_love");
  let statements = list_concat([value3], inner);
  let lines = js_code_if_lines_multiple("a", statements);
  let code = list_join_newline(lines);
  return code;
}
