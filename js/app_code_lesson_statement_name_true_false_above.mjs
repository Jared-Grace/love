import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
export function app_code_lesson_statement_name_true_false_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a name holding a word, the program the lesson on giving a value a name was about, then the same program holding true instead");
  ("The word comes first because the learner has already seen it, and the new value is met against it. The two programs differ in the value alone, so the second box says nothing the first did not, except which value.");
  let name = app_code_lesson_statement_name_value_name();
  let word = app_code_lesson_statement_name_value_word();
  let quoted = app_code_string_code(word);
  let logged = js_code_console_log_statement(name);
  let box_word = app_code_container_light_blue(root);
  html_div_cycle_code(box_word, ["A variable can hold a word:"]);
  let held_word = js_code_let_statement(name, quoted);
  app_code_code_lines_writes_out(box_word, [held_word, logged], word);
  let t = js_keyword_true();
  let f = js_keyword_false();
  let box_true = app_code_container_light_blue(root);
  html_div_cycle_code(box_true, [
    "A variable can also hold ",
    t,
    " or ",
    f,
    ":",
  ]);
  let held_true = js_code_let_statement(name, t);
  app_code_code_lines_writes_out(box_true, [held_true, logged], t);
}
