import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_replace } from "./text_replace.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_decoy_comment_ignored(question, answer) {
  arguments_assert(arguments, 2);
  ("the two tempting wrong answers for a program with a note in it: what it would write out if the note were not there, and the one line of that which the right answer does not have");
  ("Those are the two ways of getting it wrong, and they are different mistakes. The first is reading the note as code and so answering with both lines; the second is reading the note as a note but looking at the wrong line, and so answering with the line that never ran. Offered together, the only way to the right answer left is to see which line the note is on.");
  ("Without them a quiz offers the other questions' answers, and those are four different numbers, so the whole question could be settled without noticing there was a note at all - which is the single thing the screen exists to say.");
  ("The note is taken off rather than the skipped value being handed in, so this asks nothing of how the programs were built and stays right if they are built differently later.");
  ("The marker is taken off wherever it stands, not only at the start of a line. A note may start after code on the same line, and reading that note as code is the same mistake as reading a whole noted line as code.");
  let prefix = js_code_comment_prefix();
  let nothing = text_empty();
  let code = text_replace(question, prefix, nothing);
  let ignored = eval_console_log_lines(code);
  let answer_lines = text_split_newline(answer);
  function answer_lacks(line) {
    "true of a line the right answer does not have";
    let lacks = list_includes_not(answer_lines, line);
    return lacks;
  }
  let ignored_lines = text_split_newline(ignored);
  let skipped = list_filter(ignored_lines, answer_lacks);
  let decoys = list_concat([ignored], skipped);
  return decoys;
}
