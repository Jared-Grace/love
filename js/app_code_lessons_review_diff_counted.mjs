import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_remove_if_starts_with } from "./text_remove_if_starts_with.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
export function app_code_lessons_review_diff_counted(diff_text) {
  "One written change measured as three numbers: the lines that are really new, the lines that are really gone, and the lines that only went from one file to another.";
  "A LINE THAT LEAVES ONE FILE AND ARRIVES IN ANOTHER IS A MOVE, and a move is not something to review - the lifts this repo does constantly would otherwise read as the largest rewrites on the list. So a line taken away and put back verbatim somewhere in the same change is counted apart, and the two numbers left are the writing that is really new and the writing that is really gone.";
  "THE KEYS ARE WRITTEN WITH A BAR IN FRONT OF THEM so that a line of code spelling a word every object already answers to cannot be mistaken for a count.";
  "THE LINES ARE TRIMMED BEFORE THEY ARE COMPARED, because a line that moved into a deeper or shallower place is the same line and reading it again would teach nobody anything.";
  "THE TWO FILE-NAMING LINES OF A CHANGE ARE SKIPPED, because they begin with the same marks as the writing itself and would count every touched file as one line put in and one line taken out.";
  arguments_assert(arguments, 1);
  let lines = text_split_newline(diff_text);
  let lines_added = [];
  let lines_taken = [];
  for (let line of lines) {
    if (text_starts_with(line, "+++")) {
      continue;
    }
    if (text_starts_with(line, "---")) {
      continue;
    }
    if (text_starts_with(line, "+")) {
      let message = text_remove_if_starts_with(line, "+");
      let trimmed = text_trim(message);
      lines_added.push(trimmed);
    }
    if (text_starts_with(line, "-")) {
      let message2 = text_remove_if_starts_with(line, "-");
      let trimmed2 = text_trim(message2);
      lines_taken.push(trimmed2);
    }
  }
  let taken_counts = {};
  for (let line_taken of lines_taken) {
    let key = text_combine_multiple(["|", line_taken]);
    let counted = taken_counts[key];
    if (not(counted)) {
      counted = 0;
    }
    taken_counts[key] = add(counted, 1);
  }
  let added = 0;
  let moved = 0;
  for (let line_added of lines_added) {
    let key = text_combine_multiple(["|", line_added]);
    let counted = taken_counts[key];
    if (counted) {
      taken_counts[key] = subtract(counted, 1);
      moved = add(moved, 1);
    } else {
      added = add(added, 1);
    }
  }
  let left = list_size(lines_taken);
  let taken = subtract(left, moved);
  let r = { added, taken, moved };
  return r;
}
