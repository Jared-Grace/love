import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_statement_name_itself_sum_title_code } from "./app_code_lesson_statement_name_itself_sum_title_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_name_shorter_above } from "./app_code_lesson_statement_name_shorter_above.mjs";
import { app_code_lesson_statement_name_itself_sum } from "./app_code_lesson_statement_name_itself_sum.mjs";
import { app_code_lesson_statement_name_quotient_number_pairs } from "./app_code_lesson_statement_name_quotient_number_pairs.mjs";
import { app_code_lesson_statement_name_first_written_batch } from "./app_code_lesson_statement_name_first_written_batch.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
export function app_code_lesson_statement_name_divide_assign_pair() {
  arguments_assert(arguments, 0);
  ("the pair on the shorter way to divide what a name holds, a /= b; for a = a / b;: its programs, its title line, and the words its lesson is called by");
  ("No lesson teaches a = a / b; on its own. The reminder is the lesson that adds to what a name holds, with the one change a learner has already met in the lesson that divides two names - the slash in place of the plus.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let slash = js_operator_division_symbol();
  let added = app_code_lesson_statement_name_itself_sum_title_code();
  let divided = js_code_binary_spaced_nb(name_first, slash, name_last);
  let long = js_code_assign_statement(name_first, divided);
  let short = js_code_assign_operator_statement(name_first, slash, name_last);
  function above(root, context) {
    "the long line, reached from the lesson that adds to a name, then the short way, over the same program";
    "16 divided by 8 is 2, which is none of the quotients the programs below come to";
    let code = js_code_let_statement(name_first, 16);
    let code2 = js_code_let_statement(name_last, 8);
    let statement = js_code_console_log_statement(name_first);
    let lines_long = [code, code2, long, statement];
    app_code_lesson_statement_name_shorter_above(
      root,
      context,
      app_code_lesson_statement_name_itself_sum,
      [
        "we can add to what a name (",
        name_first,
        ") holds (",
        added,
        "). In the same way, we can divide what it holds (",
        long,
        "):",
      ],
      lines_long,
      long,
      short,
    );
  }
  function batch() {
    "pairs that divide with nothing left over, with the short line";
    let pairs = app_code_lesson_statement_name_quotient_number_pairs();
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
    words: "A shorter way to divide a name",
    decoys_last: null,
  };
  return pair;
}
