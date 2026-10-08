import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_from } from "./range_from.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_size } from "./text_size.mjs";
import { list_last } from "./list_last.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_string_concat } from "./app_code_lesson_expression_string_concat.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_number_text_plus() {
  arguments_assert(arguments, 0);
  ('a number joined to a string with a plus: console.log(5 + " is a number"); writes out 5 is a number');
  ("Split from the lesson that joins a name holding a number, by the human's word 2026-10-07: that lesson asked two things at once, that a plus between a number and a string joins them, and that a name stands for the number it holds. Only the first was new, so it comes first and alone, as if (2 < 3) came before if (a < b).");
  ("Reading forwards, the wrong answers offered are the two run together with no space, 5is a number, since the last string lesson said a plus adds no space and the space here is the one at the start of the string; and the plus written out, 5 + is a number, as though the line were written out as it reads. Reading backwards, the wrong program is the same line with no space at the start of the string, which writes out 5is a number.");
  ("The strings are three short endings, so the number and the space are the parts to watch.");
  ('The sentence about the space shows the string and how it starts as code, asked for by the human 2026-10-07: the start is written " ..." as the human wrote it. Not picked: a string holding only the space, " ", which reads as a second string rather than the start of this one.');
  ("The writing is a first draft by Claude 2026-10-07.");
  ("Not built a line at a time, as the if lessons around it are since 2026-10-08: the program is one line, so putting its lines in order asks nothing, and building its one missing line is unscrambling the whole program.");
  let plus = js_operator_plus_symbol();
  let endings = [" is a number", " is my number", " is the answer"];
  function program_get(number, ending) {
    'console.log(number + "ending");';
    let left = json_to(number);
    let right = app_code_string_code(ending);
    let joined = js_code_binary_spaced_nb(left, plus, right);
    let code = js_code_console_log_statement(joined);
    return code;
  }
  function batch_get() {
    "four programs, four different numbers";
    let list = range_from(1, 30);
    let numbers = list_shuffle_take(list, 4);
    function program_of(number) {
      let ending = list_random_item(endings);
      let code = program_get(number, ending);
      return code;
    }
    let codes = list_map(numbers, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function number_ending(answer) {
    "[the number, the ending] read back from what is written out: the number is everything before the first space";
    let words = text_split(answer, " ");
    let number = list_first(words);
    let skip_count = text_size(number);
    let ending = text_skip(answer, skip_count);
    let parts = [number, ending];
    return parts;
  }
  function decoys(question, answer) {
    "the two run together with no space, and the plus written out";
    let parts = number_ending(answer);
    let number = list_first(parts);
    let ending = list_last(parts);
    let right2 = text_trim(ending);
    let no_space = text_combine(number, right2);
    let plus_written = text_combine_multiple([number, " ", plus, ending]);
    let found = [no_space, plus_written];
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same line with no space at the start of the string";
    let parts = number_ending(answer);
    let number = list_first(parts);
    let ending = list_last(parts);
    let trimmed = text_trim(ending);
    let code = program_get(number, trimmed);
    let found = [code];
    return found;
  }
  function above(root, context) {
    "a plus joining two strings remembered, then a number and a string";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_expression_string_concat,
      ["a ", plus, " between two strings joins them:"],
    );
    let left2 = app_code_string_code("love");
    let right3 = app_code_string_code("joy");
    let two_strings = js_code_binary_spaced_nb(left2, plus, right3);
    let statement = js_code_console_log_statement(two_strings);
    app_code_code_lines_writes_out(box_one, [statement], "lovejoy");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      plus,
      " can join a number and a string too:",
    ]);
    let ending = list_first(endings);
    let v = program_get(5, ending);
    let value = text_combine("5", ending);
    app_code_code_lines_writes_out(box_two, [v], value);
    let combined = app_code_string_code(ending);
    let combined2 = app_code_string_code(" ...");
    html_div_cycle_code(box_two, [
      "The string ",
      combined,
      " starts with a space ",
      combined2,
      ", so a space comes after ",
      "5",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A number plus a string",
    '5 + " is a number"',
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
