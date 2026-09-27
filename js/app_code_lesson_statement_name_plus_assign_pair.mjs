import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_itself_sum_title_code } from "./app_code_lesson_statement_name_itself_sum_title_code.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_name_shorter_above } from "./app_code_lesson_statement_name_shorter_above.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { app_code_lesson_statement_name_first_written_batch } from "./app_code_lesson_statement_name_first_written_batch.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
export function app_code_lesson_statement_name_plus_assign_pair() {
  arguments_assert(arguments, 0);
  ("the pair on the shorter way to add to what a name holds, a += b; for a = a + b;: its programs, its title line, and the words both its lessons are called by");
  ("The programs are the ones the lesson on the long line asks about, with only that line written the short way, so the arithmetic a learner has already done is not what is being asked.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let long = app_code_lesson_statement_name_itself_sum_title_code();
  let short = js_code_assign_operator_statement(name_first, plus, name_last);
  function above(root, context) {
    "the long line as its lesson taught it, then the short way, over the same program";
    "2 and 3 come to 5, which is none of the totals the programs below come to";
    let code = js_code_let_statement(name_first, 2);
    let code2 = js_code_let_statement(name_last, 3);
    let statement = js_code_console_log_statement(name_first);
    let lines_long = [code, code2, long, statement];
    app_code_lesson_statement_name_shorter_above(
      root,
      context,
      app_code_lesson_statement_name_itself_sum,
      ["we can add to what a name (", name_first, ") holds (", long, "):"],
      lines_long,
      long,
      short,
    );
  }
  function batch() {
    "the long lesson's pairs of numbers, with the short line";
    let pairs = app_code_lesson_statement_name_sum_number_pairs();
    let codes = app_code_lesson_statement_name_first_written_batch(
      pairs,
      short,
    );
    return codes;
  }
  let pair = {
    above,
    batch,
    fragment: app_code_lesson_statement_title_code_paint_get(short),
    words: "A shorter way to add to a name",
    decoys_last: null,
  };
  return pair;
}
