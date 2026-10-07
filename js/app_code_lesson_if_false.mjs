import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_find } from "./list_find.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_true } from "./app_code_lesson_if_true.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_false() {
  arguments_assert(arguments, 0);
  ('the second if: if (false) { console.log("joy"); } with console.log("peace"); beside it writes out peace and nothing else');
  ("The one new fact is that, given false, the lines inside the braces do not run. The if itself was met one lesson ago and false is a value the learner has already written by hand.");
  ("A second line that writes out stands beside the if, on the human's word, 2026-10-07. An if (false) alone writes out nothing at all, and an empty answer is a blank button a learner cannot read as an answer; with a line still running, the missing word is visible as missing. The lesson about a note in front of a line made the same choice for the same reason. Two lines that write out are already taught, so the second line is not a second new thing. Not picked: teaching the quiz to say nothing was written out, which would be a new kind of answer for one lesson.");
  ("The first box shows the same program with true, so the only change between the two boxes is true to false, and what comes out loses exactly the line inside the braces.");
  ("Two of the four programs have the if first and two have it last. A screen where the if was always first would let a learner answer by always picking the last word, and they would leave believing the last line is the one that runs.");
  ("Reading forwards, the wrong answers offered are both words, the mistake of running the inside anyway, and the word inside alone, the mistake of swapping which line runs. Reading backwards, the wrong program offered is the same program with its two words swapped, so it can only be turned down by reading which word is inside the braces.");
  ("The eight words a screen asks about are eight different fruits of the Spirit, so no answer can be found by spotting a word another program writes. The two words in the boxes above may come back in a question; they come back in a different place, so knowing them gives nothing away.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  function program_lines(condition, inside_word, plain_word, if_first) {
    "an if around a line writing out one word, and a line writing out another, the if first or last";
    let code2 = app_code_string_code(inside_word);
    let inside = js_code_console_log_statement(code2);
    let code3 = app_code_string_code(plain_word);
    let plain = js_code_console_log_statement(code3);
    let if_lines = js_code_if_lines(condition, inside);
    if (if_first) {
      let first = list_concat(if_lines, [plain]);
      return first;
    }
    let last = list_concat([plain], if_lines);
    return last;
  }
  function batch_get() {
    "four programs, two with the if first and two with it last, eight different words";
    let words = list_shuffle_take(fruits, 8);
    let firsts = [true, true, false, false];
    function program_of(if_first, index) {
      let index2 = multiply(index, 2);
      let inside_word = list_get(words, index2);
      let plain_word = list_get(words, multiply(index, 2) + 1);
      let lines = program_lines("false", inside_word, plain_word, if_first);
      let code = list_join_newline(lines);
      return code;
    }
    let codes = list_map_index(firsts, program_of);
    list_shuffle(codes);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "both words, as if the inside ran anyway, and the inside word alone, as if the wrong line ran";
    let ran = text_replace(question, "false", "true");
    let both = eval_console_log_lines(ran);
    let both_lines = text_split_newline(both);
    function lacks(line) {
      let l = not_equal(line, answer);
      return l;
    }
    let skipped = list_filter(both_lines, lacks);
    let found = list_concat([both], skipped);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the word inside the braces and the word outside them swapped";
    let lines = text_split_newline(answer);
    function pushed_is(line) {
      "the line inside the braces, the one pushed in from the left";
      let pushed = text_starts_with(line, " ");
      return pushed;
    }
    function plain_is(line) {
      "the line outside the if that writes out";
      let started = text_starts_with(line, "console");
      return started;
    }
    let inside_line = list_find(lines, pushed_is);
    let plain_line = list_find(lines, plain_is);
    function swap(line) {
      "each of the two writing lines put in the other's place, the rest of the if left as it is";
      if (pushed_is(line)) {
        let moved_in = text_combine("  ", plain_line);
        return moved_in;
      }
      if (plain_is(line)) {
        let moved_out = text_trim(inside_line);
        return moved_out;
      }
      return line;
    }
    let swapped = list_map(lines, swap);
    let code = list_join_newline(swapped);
    let found = [code];
    return found;
  }
  function above(root, context) {
    "the program with true, writing out both words, then the same program with false, writing out only the word after the if";
    let left = js_code_parenthesis_left();
    let right = js_code_parenthesis_right();
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_true, [
      "if the value inside ",
      left,
      " and ",
      right,
      " is ",
      "true",
      ", then the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run:",
    ]);
    let true_lines = program_lines("true", inside_shown, after_shown, true);
    let both = list_join_newline([inside_shown, after_shown]);
    app_code_code_lines_writes_out(box_one, true_lines, both);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "If the value inside ",
      left,
      " and ",
      right,
      " is ",
      "false",
      ", then the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run:",
    ]);
    let false_lines = program_lines("false", inside_shown, after_shown, true);
    app_code_code_lines_writes_out(box_two, false_lines, after_shown);
    html_div_cycle_code(box_two, [
      "The line after ",
      brace_right,
      " still runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id_dots(
    "If false",
    "if (false) { ... }",
  );
  let lesson = app_code_lesson_code_logged({
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
