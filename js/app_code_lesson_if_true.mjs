import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_functions_console_log_string } from "./app_code_lesson_functions_console_log_string.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_true() {
  arguments_assert(arguments, 0);
  ('the first if: if (true) { console.log("joy"); } writes out joy, the same as the line inside it would alone');
  ("The first lesson of the if stage, in the roadmap the human gave on 2026-10-07: expressions, statements, if then else, looping, functions, each as easy as it can be made. The human's plan is three lessons - if (true) writes out, if (false) writes out nothing, then if with a name that may hold either - and this is the first. Between the second and the name, a comparison inside the parentheses, if (2 < 3), was added on the human's word, because it is one line and the learner has already worked 2 < 3 out inside console.log.");
  ("The only new thing is the if around a line. The line inside is console.log of a string, which the learner already has, and true is a value they have already written by hand. So the whole screen is the shape if (...) { ... } and the fact that, given true, the line inside runs.");
  ("A string is written out rather than a number. Strings and writing them out are both already taught, and a written-out word cannot be mistaken for the answer to a sum. The words are the fruits of the Spirit, the source the strings lessons drew from.");
  ("The program is not unscrambled whole, for the reason the two-line lessons give: the tokens a program is taken apart into carry no line breaks, so a program on three lines would be built back as one. It is built a line at a time instead, as those lessons do: the lines put in order, and the missing line built. The first draft left both off, copying only half of that rule; a learner asked to code it, 2026-10-07.");
  ("Filed under Statements, because in JavaScript an if is a statement. Not picked: a category of its own named for branching, a word the learner has not met; a category can be added when there is more than one kind of if to file.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let fruits = fruits_of_the_spirit();
  let shown = list_first(fruits);
  function program_lines(word) {
    "the if around the line that writes the word out";
    let quoted = app_code_string_code(word);
    let statement = js_code_console_log_statement(quoted);
    let lines = js_code_if_lines("true", statement);
    return lines;
  }
  function program_of(word) {
    "the if program as one piece of code, its lines joined";
    let lines = program_lines(word);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, each writing out a different word, none of them the word the boxes above show";
    function other(word) {
      let o = not_equal(word, shown);
      return o;
    }
    let rest = list_filter(fruits, other);
    let codes = list_shuffle_take_map(rest, 4, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function above(root, context) {
    "the line the learner knows, then the same line inside an if, writing out the same word";
    let quoted = app_code_string_code(shown);
    let statement = js_code_console_log_statement(quoted);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_functions_console_log_string,
      ["a line can write out a string:"],
    );
    app_code_code_lines_writes_out(box_one, [statement], shown);
    let box_two = app_code_container_light_blue(root);
    let keyword = js_keyword_if();
    html_div_cycle_code(box_two, [
      "We can put ",
      statement,
      " inside an ",
      keyword,
      ":",
    ]);
    let lines = program_lines(shown);
    app_code_code_lines_writes_out(box_two, lines, shown);
    let left = js_code_parenthesis_left();
    let right = js_code_parenthesis_right();
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    html_div_cycle_code(box_two, [
      "If the value inside ",
      left,
      " and ",
      right,
      " is ",
      "true",
      ", then the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id_dots(
    "If true",
    "if (true) { ... }",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys: null,
    backwards_decoys: null,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
