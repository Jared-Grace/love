import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_says } from "./app_code_braces_two_says.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function app_code_token_order_batch() {
  arguments_assert(arguments, 0);
  ("the programs whose tokens The order of the tokens asks for, in a random order: each has one if only, because the lesson stands before any lesson with more than one if, as the human asked 2026-10-10");
  let says = app_code_braces_two_says();
  let say_love = property_get(says, "say_love");
  let say_joy = property_get(says, "say_joy");
  let statements_list = [[say_love], [say_joy], [say_joy, say_love]];
  let names = ["a", "b", "b"];
  function code_of(statements, index) {
    let name = list_get(names, index);
    let lines = js_code_if_lines_multiple(name, statements);
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(statements_list, code_of);
  list_shuffle(codes);
  return codes;
}
