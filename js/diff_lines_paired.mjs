import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { text_take } from "./text_take.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { diff_lines_run_paired } from "./diff_lines_run_paired.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function diff_lines_paired(lines) {
  "$plain lines";
  "The lines of a written-down change gone through once and handed back as rows to draw, with a line that was reworded rather than replaced held as a single row carrying both wordings, and every other line held exactly as it came.";
  "★ IT IS A SECOND PASS OVER THE LINES AND NOT PART OF MAKING THEM, so whatever laid the change over the file is untouched and still answers in the file's own text. A pairing built into that walk would have to be right the first time; done afterwards it can be loosened, tightened or taken away without the thing it reads being disturbed at all.";
  "A ROW SAYS WHICH OF THE TWO KINDS IT IS RATHER THAN LEAVING THE DRAWING TO TELL. The two carry different things - one a line, one a comparison - and a drawing that worked out which by looking for a field would be reading the shape of the answer instead of the answer.";
  "THE GOINGS AND THE COMINGS ARE GATHERED AS RUNS BEFORE EITHER IS LOOKED AT, because whether a removal pairs with the addition below it depends on how many of each there are, and that is not known while standing on the first of them.";
  arguments_assert(arguments, 1);
  let entries = [];
  let size = lines.length;
  let i = 0;
  while (less_than(i, size)) {
    let line = lines[i];
    let left = text_take(line, 1);
    let removed = equal(left, "-");
    if (not(removed)) {
      list_add(entries, {
        changed: false,
        line: line,
      });
      i = i + 1;
      continue;
    }
    let gone = [];
    while (less_than(i, size) && equal(text_take(lines[i], 1), "-")) {
      let item = text_slice_from(lines[i], 1);
      list_add(gone, item);
      i = i + 1;
    }
    let brought = [];
    while (less_than(i, size) && equal(text_take(lines[i], 1), "+")) {
      let item2 = text_slice_from(lines[i], 1);
      list_add(brought, item2);
      i = i + 1;
    }
    let rows = diff_lines_run_paired(gone, brought);
    list_add_multiple(entries, rows);
  }
  return entries;
}
