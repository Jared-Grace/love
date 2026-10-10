import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_braces_three_programs() {
  arguments_assert(arguments, 0);
  ("the five programs, each with exactly three pairs of braces and each with an order of braces of its own: three ifs one after another, an if inside an if then one after, one before an if inside an if, one with two inside it, and three each inside the one before");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  let say_peace = app_code_word_console_log_statement(peace);
  function if_a() {
    let lines = js_code_if_lines_multiple("a", [say_love]);
    return lines;
  }
  function if_b() {
    let lines2 = js_code_if_lines_multiple("b", [say_joy]);
    return lines2;
  }
  function if_c() {
    let lines3 = js_code_if_lines_multiple("c", [say_peace]);
    return lines3;
  }
  function three_ifs() {
    let v = if_a();
    let v2 = if_b();
    let v3 = if_c();
    let lines4 = list_concat_multiple([v, v2, v3]);
    let code = list_join_newline(lines4);
    return code;
  }
  function nested() {
    let b = if_b();
    let statements = list_concat([say_love], b);
    let lines5 = js_code_if_lines_multiple("a", statements);
    return lines5;
  }
  function after_nested() {
    let a = nested();
    let b2 = if_c();
    let lines6 = list_concat(a, b2);
    let code2 = list_join_newline(lines6);
    return code2;
  }
  let a2 = if_c();
  let b3 = nested();
  let before_nested = list_concat(a2, b3);
  let a3 = if_b();
  let b4 = if_c();
  let statements2 = list_concat(a3, b4);
  let two_inside = js_code_if_lines_multiple("a", statements2);
  let b5 = if_c();
  let statements3 = list_concat([say_joy], b5);
  let inner = js_code_if_lines_multiple("b", statements3);
  let statements4 = list_concat([say_love], inner);
  let three_deep = js_code_if_lines_multiple("a", statements4);
  let lines_list = [before_nested, two_inside, three_deep];
  let codes = list_map(lines_list, list_join_newline);
  let v4 = three_ifs();
  let v5 = after_nested();
  let programs = list_concat([v4, v5], codes);
  return programs;
}
