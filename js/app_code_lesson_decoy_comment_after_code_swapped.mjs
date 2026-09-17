import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_replace } from "./text_replace.mjs";
export function app_code_lesson_decoy_comment_after_code_swapped(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the tempting wrong programs for a screen asking which code wrote something out, when the program is code with a comment after it on the same line: the same line with the two halves swapped, and the same line with the slashes taken out");
  ("Every other program the screen could offer is made of different numbers, so a learner could pick the right one by finding a number and never read which side of the slashes it stood on. The swapped line holds the same two halves and differs only in which one runs, so it can only be turned down by reading where the slashes are.");
  ("The line with the slashes taken out is the other mistake: reading a comment after code as code. It writes out both numbers, and the question shows only one.");
  ("The question is the thing written out and the answer is the program, which is why it is the answer that gets read here.");
  let prefix = js_code_comment_prefix();
  let separator = text_combine(" ", prefix);
  let halves = text_split(answer, separator);
  let code = list_first(halves);
  let skipped = list_second(halves);
  let code_noted = text_combine(prefix, code);
  let swapped = list_join_space([skipped, code_noted]);
  let nothing = text_empty();
  let both = text_replace(answer, prefix, nothing);
  let decoys = [swapped, both];
  return decoys;
}
