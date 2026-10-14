import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_says } from "./app_code_braces_three_says.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_four_if_else_in_if_else() {
  arguments_assert(arguments, 0);
  ("a program with four pairs of braces, an if and its else inside an if that has an else of its own, so its braces stand { { } { } } { }; the program of If and else inside an if with the outer else added, which writes out patience, the fourth fruit of the Spirit, as in Two else ifs");
  let says = app_code_braces_three_says();
  let fruits = fruits_of_the_spirit();
  let patience = list_get(fruits, 3);
  let say_patience = app_code_word_console_log_statement(patience);
  let value = property_get(says, "say_joy");
  let value2 = property_get(says, "say_peace");
  let inner = js_code_if_else_lines_multiple("b", [value], [value2]);
  let value3 = property_get(says, "say_love");
  let statements = list_concat([value3], inner);
  let lines = js_code_if_else_lines_multiple("a", statements, [say_patience]);
  let code = list_join_newline(lines);
  return code;
}
