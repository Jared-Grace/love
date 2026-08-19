import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function app_code_lesson_decoy_comment_moved(question, answer) {
  arguments_assert(arguments, 2);
  ("the one tempting wrong program for a screen asking which code wrote something out: the same program with its note on the other line");
  ("Every other program the screen could offer is made of different numbers, so a learner could pick the right one by finding a number and never read which line the note was on. This one holds the same two lines and differs in nothing but that, so it can only be turned down by reading it.");
  ("The question is the thing written out and the answer is the program, which is why it is the answer that gets read here.");
  let prefix = js_code_comment_prefix();
  function note_other_way(line) {
    "the line with its note marker put on if it had none, and taken off if it had one";
    let note = text_starts_with(line, prefix);
    if (note) {
      let plain = text_prefix_without(line, prefix);
      return plain;
    }
    let noted = text_combine(prefix, line);
    return noted;
  }
  let lines = text_split_newline(answer);
  let moved_lines = list_map(lines, note_other_way);
  let moved = list_join_newline(moved_lines);
  let decoys = [moved];
  return decoys;
}
