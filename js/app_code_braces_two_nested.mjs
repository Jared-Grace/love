import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_says } from "./app_code_braces_two_says.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_two_nested() {
  arguments_assert(arguments, 0);
  ("a program with two pairs of braces, one if inside another, so its braces stand { { } }");
  let says = app_code_braces_two_says();
  let say_love = property_get(says, "say_love");
  let say_joy = property_get(says, "say_joy");
  let if_b = js_code_if_lines_multiple("b", [say_joy]);
  let statements = list_concat([say_love], if_b);
  let lines = js_code_if_lines_multiple("a", statements);
  let code = list_join_newline(lines);
  return code;
}
