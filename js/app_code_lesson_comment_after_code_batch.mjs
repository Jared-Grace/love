import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
export function app_code_lesson_comment_after_code_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each is one line that writes out what two numbers add up to, and after it on the same line two slashes and another line that would have written out");
  ("What stands after the slashes is code rather than words. Words after the slashes would be skipped whether or not a learner knew why, so they could never show that a learner had read where the slashes are; code after them is a line that would have written something, and the question is whether it does.");
  ("Both halves of the line are the plainest line a learner knows by now. The only new thing is that the two of them share a line, so that is the only thing an answer can turn on.");
  ("The code that runs and the code that is skipped never add up to the same number. Were they equal, the screen would read the same whichever half the learner thought ran.");
  ("No answer and no skipped value is a number written in any of the programs, and the eight of them are eight different numbers. A question shows one program and offers wrong answers built from it, so a number that is worked out in one place and written down in another could be found by looking rather than by reading.");
  let plus = js_operator_plus_symbol();
  let cases = [
    {
      kept_left: 6,
      kept_right: 5,
      skipped_left: 3,
      skipped_right: 9,
    },
    {
      kept_left: 8,
      kept_right: 5,
      skipped_left: 9,
      skipped_right: 5,
    },
    {
      kept_left: 7,
      kept_right: 8,
      skipped_left: 9,
      skipped_right: 7,
    },
    {
      kept_left: 9,
      kept_right: 8,
      skipped_left: 9,
      skipped_right: 9,
    },
  ];
  let prefix = js_code_comment_prefix();
  function program_of(one) {
    "the line that writes out, then on the same line the slashes and the line that is skipped";
    let kept_left = property_get(one, "kept_left");
    let kept_right = property_get(one, "kept_right");
    let skipped_left = property_get(one, "skipped_left");
    let skipped_right = property_get(one, "skipped_right");
    let kept_sum = js_code_binary_spaced_nb(kept_left, plus, kept_right);
    let kept = js_code_console_log_statement(kept_sum);
    let skipped_sum = js_code_binary_spaced_nb(
      skipped_left,
      plus,
      skipped_right,
    );
    let skipped_line = js_code_console_log_statement(skipped_sum);
    let skipped = text_combine(prefix, skipped_line);
    let code = list_join_space([kept, skipped]);
    return code;
  }
  let codes = list_shuffle_take_map(cases, 4, program_of);
  return codes;
}
