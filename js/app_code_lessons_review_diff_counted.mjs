import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { app_code_lessons_review_diff_lines } from "./app_code_lessons_review_diff_lines.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_review_diff_counted(diff_text) {
  "One written change measured as three numbers: the lines that are really new, the lines that are really gone, and the lines that only went from one file to another.";
  "A LINE THAT LEAVES ONE FILE AND ARRIVES IN ANOTHER IS A MOVE, and a move is not something to review - the lifts this repo does constantly would otherwise read as the largest rewrites on the list. So a line taken away and put back verbatim somewhere in the same change is counted apart, and the two numbers left are the writing that is really new and the writing that is really gone.";
  "THE KEYS ARE WRITTEN WITH A BAR IN FRONT OF THEM so that a line of code spelling a word every object already answers to cannot be mistaken for a count.";
  "A LINE IS MATCHED ONCE AND THEN SPENT. Three copies taken away and five put back is three moves and two new lines, so the tally is counted down as each match is found rather than only asked whether the line was ever seen.";
  arguments_assert(arguments, 1);
  let sides = app_code_lessons_review_diff_lines(diff_text);
  let lines_added = sides.added;
  let lines_taken = sides.taken;
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
  let r = {
    added,
    taken,
    moved,
  };
  return r;
}
