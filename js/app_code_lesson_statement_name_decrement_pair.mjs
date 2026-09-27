import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_name_shorter_above } from "./app_code_lesson_statement_name_shorter_above.mjs";
import { app_code_lesson_statement_name_one_less } from "./app_code_lesson_statement_name_one_less.mjs";
import { app_code_lesson_statement_name_one_batch } from "./app_code_lesson_statement_name_one_batch.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
export function app_code_lesson_statement_name_decrement_pair() {
  arguments_assert(arguments, 0);
  ("the pair on the shorter way to take one from a name, a--; for a = a - 1;: its programs, its title line, and the words both its lessons are called by");
  let name = app_code_lesson_statement_name_value_name();
  let minus = js_operator_minus_symbol();
  let long = app_code_lesson_statement_name_itself_step_title_code(minus);
  let short = js_code_update_statement(name, minus);
  function above(root, context) {
    "the long line as its lesson taught it, then the short way, over the same program";
    "13 and 12 are none of the numbers the programs below start at or come to";
    let code = js_code_let_statement(name, 13);
    let statement = js_code_console_log_statement(name);
    let lines_long = [code, long, statement];
    app_code_lesson_statement_name_shorter_above(
      root,
      context,
      app_code_lesson_statement_name_one_less,
      ["we can take one from what a name (", name, ") holds (", long, "):"],
      lines_long,
      long,
      short,
    );
  }
  function batch() {
    "the long lesson's starting numbers, with the short line";
    let codes = app_code_lesson_statement_name_one_batch(short);
    return codes;
  }
  let pair = {
    above,
    batch,
    fragment: app_code_lesson_statement_title_code_paint_get(short),
    words: "A shorter way to take one from a name",
    decoys_last: null,
  };
  return pair;
}
