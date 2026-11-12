import { math_max } from "./math_max.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { diff_line_segments_reworded } from "./diff_line_segments_reworded.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function diff_lines_signed_aligned(before, after) {
  arguments_assert(arguments, 2);
  ("Two wordings of the same few lines set out as a signed difference, lining up each line with the line it became even where lines were merged, split, added or dropped around it.");
  ("★ IT LINES UP BY SEARCHING, NOT BY PLACE, so one merged pair of lines no longer marks every line below it as changed. Two lines count as the same line when they are equal, or when one is plainly the other reworded - the same test the drawing already uses to decide whether to show a line as one reworded row - and the most such lines are kept in order.");
  ("A LINE KEPT BUT REWORDED IS ITS OWN GONE-AND-BROUGHT PAIR, so the drawing pairs it into one row with only the changed letters marked; the lines between two kept lines go out and come in as one run, gone before brought.");
  let size_before = before.length;
  let size_after = after.length;
  function same_is(a, b) {
    if (equal(a, b)) {
      return true;
    }
    let segments = diff_line_segments_reworded(a, b);
    let b2 = null_is(segments);
    let r = not(b2);
    return r;
  }
  let best = [];
  for (let i = 0; less_than_equal(i, size_before); i++) {
    let row = [];
    for (let j = 0; less_than_equal(j, size_after); j++) {
      row.push(0);
    }
    best.push(row);
  }
  for (let i = subtract(size_before, 1); greater_than_equal(i, 0); i--) {
    for (let j = subtract(size_after, 1); greater_than_equal(j, 0); j--) {
      let skip = math_max(best[i + 1][j], best[i][j + 1]);
      let take = same_is(before[i], after[j]) ? best[i + 1][j + 1] + 1 : 0;
      best[i][j] = math_max(skip, take);
    }
  }
  let signed = [];
  let gone = [];
  let brought = [];
  function flush() {
    list_add_multiple(signed, gone);
    list_add_multiple(signed, brought);
    gone = [];
    brought = [];
  }
  let i = 0;
  let j = 0;
  while (less_than(i, size_before) && less_than(j, size_after)) {
    let a = before[i];
    let b = after[j];
    let taken = same_is(a, b) && equal(best[i][j], best[i + 1][j + 1] + 1);
    if (taken) {
      flush();
      if (equal(a, b)) {
        list_add(signed, " " + a);
      } else {
        list_add_multiple(signed, ["-" + a, "+" + b]);
      }
      i = i + 1;
      j = j + 1;
      continue;
    }
    if (greater_than_equal(best[i + 1][j], best[i][j + 1])) {
      list_add(gone, "-" + a);
      i = i + 1;
      continue;
    }
    list_add(brought, "+" + b);
    j = j + 1;
  }
  while (less_than(i, size_before)) {
    list_add(gone, "-" + before[i]);
    i = i + 1;
  }
  while (less_than(j, size_after)) {
    list_add(brought, "+" + after[j]);
    j = j + 1;
  }
  flush();
  return signed;
}
