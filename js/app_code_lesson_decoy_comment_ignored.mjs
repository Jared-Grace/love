import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function app_code_lesson_decoy_comment_ignored(question, answer) {
  arguments_assert(arguments, 2);
  ("the two tempting wrong answers for a program with a note in it: what it would write out if the note were not there, and the one line of that which the right answer does not have");
  ("Those are the two ways of getting it wrong, and they are different mistakes. The first is reading the note as code and so answering with both lines; the second is reading the note as a note but looking at the wrong line, and so answering with the line that never ran. Offered together, the only way to the right answer left is to see which line the note is on.");
  ("Without them a quiz offers the other questions' answers, and those are four different numbers, so the whole question could be settled without noticing there was a note at all - which is the single thing the screen exists to say.");
  ("The note is taken off rather than the skipped value being handed in, so this asks nothing of how the programs were built and stays right if they are built differently later.");
  let prefix = js_code_comment_prefix();
  function note_off(line) {
    "the line with its note marker taken off, if it had one";
    let plain = text_prefix_without_try(line, prefix);
    return plain;
  }
  let lines = text_split_newline(question);
  let plain_lines = list_map(lines, note_off);
  let code = list_join_newline(plain_lines);
  let ignored = eval_console_log_lines(code);
  let answer_lines = text_split_newline(answer);
  function answer_lacks(line) {
    "true of a line the right answer does not have";
    let had = list_includes(answer_lines, line);
    let lacks = not(had);
    return lacks;
  }
  let ignored_lines = text_split_newline(ignored);
  let skipped = list_filter(ignored_lines, answer_lacks);
  let decoys = list_concat([ignored], skipped);
  return decoys;
}
