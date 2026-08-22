import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { text_remove_if_starts_with } from "./text_remove_if_starts_with.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
export function app_code_lessons_review_diff_lines(diff_text) {
  "The two sides of one written change pulled apart: the lines it puts in, and the lines it takes away, each with the marks and the spacing in front of it taken off.";
  "THE LINES ARE TRIMMED AS THEY ARE READ, because whoever counts them next is asking whether a line is the same line, and a line that moved into a deeper or shallower place is.";
  "THE TWO FILE-NAMING LINES ARE SKIPPED, because they begin with the same marks as the writing itself and would count every touched file as one line put in and one line taken out.";
  arguments_assert(arguments, 1);
  let lines = text_split_newline(diff_text);
  let added = [];
  let taken = [];
  for (let line of lines) {
    if (text_starts_with(line, "+++")) {
      continue;
    }
    if (text_starts_with(line, "---")) {
      continue;
    }
    if (text_starts_with(line, "+")) {
      let message = text_remove_if_starts_with(line, "+");
      let item = text_trim(message);
      list_add(added, item);
    }
    if (text_starts_with(line, "-")) {
      let message2 = text_remove_if_starts_with(line, "-");
      let item2 = text_trim(message2);
      list_add(taken, item2);
    }
  }
  let r = {
    added,
    taken,
  };
  return r;
}
