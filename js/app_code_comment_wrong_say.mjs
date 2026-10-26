import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_size } from "./text_size.mjs";
import { text_trim } from "./text_trim.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_comment_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for code holding a // comment: that the computer skips from // to the end of the line, the comments it skips, then each line left and what it writes out, as parts that take turns between words and code. null when there is no comment, when what is left cannot be followed, or when what it writes out is not the right answer");
  ("A line is cut at its first //, so a // inside a text would be cut wrongly; no lesson writes one, and such a line would most likely fail to be followed and stay silent. Not picked: the working of each sum as the expression reminder gives it, which says again what the comment lessons are not about; what each line writes out is enough to find the slip");
  let code = text_to(question);
  let right = text_to(answer);
  let marker = "//";
  let lines = text_split_newline(code);
  let comments = [];
  let kept = [];
  for (let line of lines) {
    let at = text_index_of_try(line, marker);
    if (equal(at, -1)) {
      list_add(kept, line);
      continue;
    }
    let to = text_size(line);
    let comment = text_slice(line, at, to);
    let item = text_trim(comment);
    list_add(comments, item);
    let message = text_slice(line, 0, at);
    let before = text_trim(message);
    let b = equal(before, "");
    if (not(b)) {
      list_add(kept, before);
    }
  }
  if (list_empty_is(comments)) {
    return null;
  }
  let program = list_join_newline(kept);
  function trace_get() {
    let trace = app_code_program_trace(program);
    return trace;
  }
  let trace = catch_null(trace_get);
  if (null_is(trace)) {
    return null;
  }
  let parts = [];
  let words = "Remember: the computer skips everything from ";
  function code_add(piece) {
    list_add_multiple(parts, [words, piece]);
    words = "";
  }
  code_add(marker);
  words = " to the end of its line, so ";
  let first = true;
  for (let comment of comments) {
    if (not(first)) {
      words = words + " and ";
    }
    first = false;
    code_add(comment);
  }
  words = words + " is skipped";
  let logged = [];
  for (let entry of trace) {
    let actions = property_get(entry, "actions");
    let index = property_get(entry, "line");
    for (let action of actions) {
      let kind = property_get(action, "kind");
      let b2 = equal(kind, "log");
      if (not(b2)) {
        continue;
      }
      let input = property_get(action, "value");
      let written = text_to(input);
      words = words + ", then ";
      let item2 = list_get(kept, index);
      code_add(item2);
      words = words + " writes out ";
      code_add(written);
      list_add(logged, written);
    }
  }
  let output = list_join_newline(logged);
  let b3 = equal(output, right);
  if (not(b3)) {
    return null;
  }
  list_add(parts, words);
  return parts;
}
