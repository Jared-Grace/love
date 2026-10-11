import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_three_ifs() {
  arguments_assert(arguments, 0);
  ("a program with three pairs of braces, three ifs one after another, so its braces stand { } { } { }");
  let says = app_code_braces_three_says();
  let value = property_get(says, "say_love");
  let if_a = js_code_if_lines_multiple("a", [value]);
  let value2 = property_get(says, "say_joy");
  let if_b = js_code_if_lines_multiple("b", [value2]);
  let value3 = property_get(says, "say_peace");
  let if_c = js_code_if_lines_multiple("c", [value3]);
  let lines = list_concat_multiple([if_a, if_b, if_c]);
  let code = list_join_newline(lines);
  return code;
}
