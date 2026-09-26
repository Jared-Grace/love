import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { app_code_lesson_statement_names_binary_answer_lines } from "./app_code_lesson_statement_names_binary_answer_lines.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_not } from "./app_code_lesson_expression_not.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_not() {
  arguments_assert(arguments, 0);
  ("the opposite of a name: let a = true; let opposite = !a; console.log(opposite); writes out false");
  ("The one symbol of the Operators lessons that stands before one value rather than between two, so it could not be handed to the screen the two-name lessons share. It is the same screen with one name instead of two: a reminder of the symbol written with a value, then the value given a name and the symbol written with the name instead.");
  ("A name holding true or false can hold only two values, so a screen asks both programs in a fresh order, and a question offers two buttons.");
  ("Its answer is given a name and the name written out, the way the two-name lessons end, through the same helper - so the one lesson that could not share their screen still shares their last lines.");
  let symbol = js_operator_bang_symbol();
  let name = app_code_lesson_statement_name_value_name();
  let asked = js_code_not(name);
  let answer_lines = app_code_lesson_statement_names_binary_answer_lines(
    asked,
    "opposite",
  );
  let title_line = list_first(answer_lines);
  let name_id = app_code_lesson_statement_title_name_id(
    "The opposite of a name",
    title_line,
  );
  function program_of(value) {
    "the lines that give a true or false value the name, give its opposite a name, and write that out";
    let held = js_code_let_statement(name, value);
    let lines = list_concat([held], answer_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function programs_get() {
    "both programs, in a fresh order each screen";
    let values = list_shuffle_take([true, false], 2);
    let codes = list_map(values, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    programs_get,
    eval_console_log_to_list,
  );
  function above(root, context) {
    "the boxes read before the first question: the symbol written with a value the way the learner already knows it, and then the value given a name and the symbol written with the name instead";
    let value_true = js_keyword_true();
    let value_false = js_keyword_false();
    let value_asked = js_code_not(value_true);
    let box_remember = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_remember,
      context,
      app_code_lesson_expression_not,
      ["we can get the opposite (", symbol, ") of true or false:"],
    );
    let logged_value = js_code_console_log_statement(value_asked);
    app_code_code_lines_writes_out(box_remember, [logged_value], value_false);
    let box_name = app_code_container_light_blue(root);
    html_div_cycle_code(box_name, [
      "Suppose we give a name (",
      name,
      ") to a true or false value (",
      value_true,
      "):",
    ]);
    let held = js_code_let_statement(name, true);
    html_div_code_lines(box_name, [held]);
    html_div_cycle_code(box_name, [
      "We can use ",
      symbol,
      " before a true or false value (like ",
      value_asked,
      ")",
    ]);
    html_div_cycle_code(box_name, [
      "We can also use ",
      symbol,
      " before a name (like ",
      asked,
      "):",
    ]);
    let lines_name = list_concat([held], answer_lines);
    app_code_code_lines_writes_out(box_name, lines_name, value_false);
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  return lesson;
}
