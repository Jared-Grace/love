import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_if_else_if_chain_lines_multiple } from "./js_code_if_else_if_chain_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_four_else_if_twice() {
  arguments_assert(arguments, 0);
  ("a program with four pairs of braces, an if, two else ifs after it and an else after those, so its braces stand { } { } { } { }; the fourth line written out is patience, the fourth fruit of the Spirit, as in Two else ifs");
  let says = app_code_braces_three_says();
  let fruits = fruits_of_the_spirit();
  let patience = list_get(fruits, 3);
  let say_patience = app_code_word_console_log_statement(patience);
  let value = property_get(says, "say_love");
  let value2 = property_get(says, "say_joy");
  let value3 = property_get(says, "say_peace");
  let inside = [[value], [value2], [value3]];
  let lines = js_code_if_else_if_chain_lines_multiple(["a", "b", "c"], inside, [
    say_patience,
  ]);
  let code = list_join_newline(lines);
  return code;
}
