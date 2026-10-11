import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_brace_pair_programs_three() {
  arguments_assert(arguments, 0);
  ("the five programs of Which brace pairs with which, each with exactly three pairs of braces: three ifs one after the other, an if and else with an if after it, an if inside an if with an if after it or before it, and two ifs inside an if");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  let say_peace = app_code_word_console_log_statement(peace);
  let if_a = js_code_if_lines_multiple("a", [say_love]);
  let if_b = js_code_if_lines_multiple("b", [say_joy]);
  let if_c = js_code_if_lines_multiple("c", [say_peace]);
  let three_ifs = list_concat_multiple([if_a, if_b, if_c]);
  let if_else = js_code_if_else_lines_multiple("a", [say_love], [say_joy]);
  let else_then_if = list_concat(if_else, if_c);
  let statements = list_concat([say_love], if_b);
  let nested = js_code_if_lines_multiple("a", statements);
  let after_nested = list_concat(nested, if_c);
  let before_nested = list_concat(if_c, nested);
  let statements2 = list_concat(if_b, if_c);
  let two_inside = js_code_if_lines_multiple("a", statements2);
  let lines_list = [
    three_ifs,
    else_then_if,
    after_nested,
    before_nested,
    two_inside,
  ];
  let codes = list_map(lines_list, list_join_newline);
  return codes;
}
