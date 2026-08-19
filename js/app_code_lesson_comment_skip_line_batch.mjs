import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_comment_skip_line_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each is the two lines that write out the learner already knows, with the two slashes put in front of one of them");
  ("Both lines are lines the learner has read for many screens, and the second of them was read one screen ago. The only thing here that has not been read before is the slashes in front of one, so that is the only thing an answer can turn on.");
  ("Two of the four have the note on the first line and two on the second. A screen where it was always the same line would let a learner answer four times by looking in one place, and they would leave believing the last line is the one that runs.");
  ("The line that runs and the line that is skipped never add up to the same number. Two lines whose answers were equal could not show that one of them did not run - the screen would read the same whichever line the note was on.");
  ("No answer and no skipped value is a number written in any of the programs, and the eight of them are eight different numbers. A question shows one program and offers wrong answers built from it, so a number that is worked out in one place and written down in another could be found by looking rather than by reading.");
  let plus = js_operator_plus_symbol();
  let cases = [
    {
      kept_left: 3,
      kept_right: 8,
      skipped_left: 4,
      skipped_right: 6,
      kept_first: true,
    },
    {
      kept_left: 5,
      kept_right: 7,
      skipped_left: 4,
      skipped_right: 9,
      kept_first: false,
    },
    {
      kept_left: 6,
      kept_right: 8,
      skipped_left: 7,
      skipped_right: 8,
      kept_first: true,
    },
    {
      kept_left: 9,
      kept_right: 7,
      skipped_left: 8,
      skipped_right: 9,
      kept_first: false,
    },
  ];
  let prefix = js_code_comment_prefix();
  function program_of(one) {
    "the two lines that write out, with the slashes in front of the one that is skipped";
    let kept_left = property_get(one, "kept_left");
    let kept_right = property_get(one, "kept_right");
    let skipped_left = property_get(one, "skipped_left");
    let skipped_right = property_get(one, "skipped_right");
    let kept_first = property_get(one, "kept_first");
    let kept_sum = js_code_binary_spaced_nb(kept_left, plus, kept_right);
    let kept = js_code_console_log_statement(kept_sum);
    let skipped_sum = js_code_binary_spaced_nb(
      skipped_left,
      plus,
      skipped_right,
    );
    let skipped_line = js_code_console_log_statement(skipped_sum);
    let skipped = text_combine(prefix, skipped_line);
    let lines = [skipped, kept];
    if (kept_first) {
      lines = [kept, skipped];
    }
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_shuffle_take_map(cases, 4, program_of);
  return codes;
}
