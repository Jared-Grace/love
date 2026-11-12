import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_learn_js_string_code } from "./app_learn_js_string_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { range_from } from "./range_from.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_between } from "./text_between.mjs";
import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_number_text_plus } from "./app_learn_js_lesson_number_text_plus.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_number_text_join() {
  arguments_assert(arguments, 0);
  ('a number joined to a string: let n = 5; console.log(n + " is a number"); writes out 5 is a number');
  ('Asked for by the human 2026-10-07, who wanted console.log(n + " is a number") beside an if that writes out n + " is even"; that program needs a plus between a number and a string, which no lesson had shown, so it gets a lesson of its own first.');
  ("Since 2026-10-07, asked for by the human, a number plus a string with no name is a lesson of its own just before this one, so the one new thing here is the name standing for the number it holds.");
  ("The wrong answers offered reading forwards are the name written out in place of what it holds, n is a number, and the two run together with no space, 5is a number: the last string lesson said a plus adds no space, and the space here is the one at the start of the string.");
  ("Reading backwards every wrong program holds the same number and the same ending as the right one, so none can be thrown out for a word that did not come out. They are the name in quotes, which writes out the name rather than the number; the whole line in one string, which writes out n + is a number; and the ending with no space at its start, which writes out 5is a number. Not picked: the string before the name, because it asks about the order from the lesson before and not about the name; and the number written in place of the name, because that writes out exactly the same words and so would be a second right answer.");
  ("The strings are three short endings, so the number is the part to watch.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let plus = js_operator_plus_symbol();
  let name = "n";
  let endings = [" is a number", " is my number", " is the answer"];
  function joined(left, ending) {
    "left + ending, the ending in quotes";
    let right = app_learn_js_string_code(ending);
    let j = js_code_binary_spaced_nb(left, plus, right);
    return j;
  }
  function program_get(left, number, ending) {
    "let n = number; console.log(left + ending);";
    let code2 = js_code_let_json_statement(name, number);
    let code3 = joined(left, ending);
    let statement = js_code_console_log_statement(code3);
    let lines = [code2, statement];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, four different numbers";
    let list = range_from(1, 30);
    let numbers = list_shuffle_take(list, 4);
    function program_of(number) {
      let ending = list_random_item(endings);
      let code = program_get(name, number, ending);
      return code;
    }
    let codes = list_map(numbers, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the name written out in place of the number, and the two run together with no space";
    let number = text_between(question, "= ", ";");
    let ending = text_prefix_without_inner(answer, number);
    let named = text_combine(name, ending);
    let right3 = text_trim(ending);
    let no_space = text_combine(number, right3);
    let found = [named, no_space];
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same first line, then the name in quotes, or the whole line in one string, or no space at the start of the ending";
    let lines = text_split_newline(answer);
    let first = list_first(lines);
    let number = text_between(answer, "= ", ";");
    let ending = text_prefix_without_inner(question, number);
    function program_of(inside) {
      "the same first line, then a line writing out what is given";
      let statement = js_code_console_log_statement(inside);
      let code = list_join_newline([first, statement]);
      return code;
    }
    let quoted = app_learn_js_string_code(name);
    let name_quoted = joined(quoted, ending);
    let plus_written = text_combine_multiple([name, " ", plus, ending]);
    let one_string = app_learn_js_string_code(plus_written);
    let trimmed = text_trim(ending);
    let no_space = joined(name, trimmed);
    let found = list_map([name_quoted, one_string, no_space], program_of);
    return found;
  }
  function above(root, context) {
    "a number joined to a string remembered, then a name holding the number";
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_number_text_plus,
      ["a ", plus, " can join a number and a string:"],
    );
    let ending = list_first(endings);
    let code4 = joined(5, ending);
    let statement3 = js_code_console_log_statement(code4);
    let value = text_combine("5", ending);
    app_learn_js_code_lines_writes_out(box_two, [statement3], value);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A name holding a number joins the same way:",
    ]);
    let program = program_get(name, 5, ending);
    let lines2 = text_split_newline(program);
    let value2 = text_combine("5", ending);
    app_learn_js_code_lines_writes_out(box_three, lines2, value2);
    app_learn_js_div_cycle_code(box_three, [
      "",
      name,
      " is ",
      "5",
      ", so ",
      "5",
      " is written out, not ",
      name,
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A number joined to a string",
    'n + " is a number"',
  );
  let lesson = app_learn_js_lesson_code_logged({steps: true,
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
