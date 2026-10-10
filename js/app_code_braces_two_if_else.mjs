import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_says } from "./app_code_braces_two_says.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_two_if_else() {
  arguments_assert(arguments, 0);
  ("a program with two pairs of braces, an if and its else, so its braces stand { } { }");
  let says = app_code_braces_two_says();
  let say_love = property_get(says, "say_love");
  let say_joy = property_get(says, "say_joy");
  let lines = js_code_if_else_lines_multiple("a", [say_love], [say_joy]);
  let code = list_join_newline(lines);
  return code;
}
