import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_from } from "./range_from.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_between } from "./text_between.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_last } from "./list_last.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_string_concat } from "./app_code_lesson_expression_string_concat.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_number_text_join() {
  arguments_assert(arguments, 0);
  ('a number joined to a string: let n = 5; console.log(n + " is a number"); writes out 5 is a number');
  ('Asked for by the human 2026-10-07, who wanted console.log(n + " is a number") beside an if that writes out n + " is even"; that program needs a plus between a number and a string, which no lesson had shown, so it gets a lesson of its own first.');
  ("The wrong answers offered reading forwards are the name written out in place of what it holds, n is a number, and the two run together with no space, 5is a number: the last string lesson said a plus adds no space, and the space here is the one at the start of the string. Reading backwards, the wrong program puts the name in quotes, which writes out the name rather than the number.");
  ("The strings are three short endings, so the number is the part to watch.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let plus = js_operator_plus_symbol();
  let name = "n";
  let endings = [" is a number", " is my number", " is the answer"];
  function joined(left, ending) {
    "left + ending, the ending in quotes";
    let right = app_code_string_code(ending);
    let j = js_code_binary_spaced_nb(left, plus, right);
    return j;
  }
  function program_get(left, number, ending) {
    "let n = number; console.log(left + ending);";
    let right2 = json_to(number);
    let code2 = js_code_let_statement(name, right2);
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
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the name written out in place of the number, and the two run together with no space";
    let number = text_between(question, "= ", ";");
    let skip_count = text_length(number);
    let ending = text_skip(answer, skip_count);
    let named = text_combine(name, ending);
    let right3 = text_trim(ending);
    let no_space = text_combine(number, right3);
    let found = [named, no_space];
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the name in quotes, which writes out the name";
    let lines = text_split_newline(answer);
    let quoted = app_code_string_code(name);
    let joined_line = list_last(lines);
    let from2 = text_combine("(", name);
    let to = text_combine("(", quoted);
    let replaced = text_replace(joined_line, from2, to);
    let first = list_first(lines);
    let code = list_join_newline([first, replaced]);
    let found = [code];
    return found;
  }
  function above(root, context) {
    "a plus joining two strings remembered, then a number and a string, then a name holding the number";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_expression_string_concat,
      ["a ", plus, " between two strings joins them:"],
    );
    let left2 = app_code_string_code("love");
    let right4 = app_code_string_code("joy");
    let two_strings = js_code_binary_spaced_nb(left2, plus, right4);
    let statement2 = js_code_console_log_statement(two_strings);
    app_code_code_lines_writes_out(box_one, [statement2], "lovejoy");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      plus,
      " can join a number and a string too:",
    ]);
    let ending = list_first(endings);
    let code4 = joined(5, ending);
    let statement3 = js_code_console_log_statement(code4);
    let value = text_combine("5", ending);
    app_code_code_lines_writes_out(box_two, [statement3], value);
    html_div_cycle_code(box_two, [
      "The string starts with a space, so a space comes after ",
      "5",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "A name holding a number joins the same way:",
    ]);
    let program = program_get(name, 5, ending);
    let lines2 = text_split_newline(program);
    let value2 = text_combine("5", ending);
    app_code_code_lines_writes_out(box_three, lines2, value2);
    html_div_cycle_code(box_three, [
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
  let name_id = app_code_lesson_statement_title_name_id_dots(
    "A number joined to a string",
    'n + " is a number"',
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
