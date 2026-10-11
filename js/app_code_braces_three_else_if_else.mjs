import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { js_code_if_else_if_with_else_lines_multiple } from "./js_code_if_else_if_with_else_lines_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_three_else_if_else() {
  arguments_assert(arguments, 0);
  ("a program with three pairs of braces, an if, an else if after it and an else after that, so its braces stand { } { } { }");
  let says = app_code_braces_three_says();
  let value = property_get(says, "say_love");
  let value2 = property_get(says, "say_joy");
  let value3 = property_get(says, "say_peace");
  let lines = js_code_if_else_if_with_else_lines_multiple(
    "a",
    [value],
    "b",
    [value2],
    [value3],
  );
  let code = list_join_newline(lines);
  return code;
}
