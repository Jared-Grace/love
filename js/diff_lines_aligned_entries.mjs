import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_segments_changed } from "./text_segments_changed.mjs";
import { text_segments_joined } from "./text_segments_joined.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { diff_line_segments_reworded } from "./diff_line_segments_reworded.mjs";
import { text_segments_shared_size } from "./text_segments_shared_size.mjs";
import { diff_lines_run_paired } from "./diff_lines_run_paired.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function diff_lines_aligned_entries(before, after) {
  arguments_assert(arguments, 2);
  ("Two wordings of the same few lines handed back as the rows a difference page draws: a line kept as it was, a line that became another with only the changed letters marked, and the lines between that simply went or came.");
  ("★ A LINE THAT GREW IS STILL THE SAME LINE. A sermon rewording often keeps a line whole and adds to it - a quote that gains who said it - and the plain rewording test calls that two different lines, because most of the longer one is new. So a line also counts as kept when one unbroken stretch of it, at least half its length, sits whole inside the other. An unbroken stretch is the evidence: two unrelated sentences share many letters scattered about, never half of one in a single run.");
  ("★ THE PAIRING KEEPS THE MOST SHARED TEXT, NOT THE MOST LINES. Where two old lines merged into one new line, both may share something with it, and the one that shares more is the line it became; the other went.");
  ("The lines between two kept lines go to the same run pairing the drawing already uses, so a run there is drawn exactly as it was before.");
  let size_before = before.length;
  let size_after = after.length;
  function compared(a, b) {
    let found = text_segments_changed(a, b);
    let segments = text_segments_joined(found);
    let value = diff_line_segments_reworded(a, b);
    let b2 = null_is(value);
    let reworded = not(b2);
    let run = 0;
    for (let segment of segments) {
      if (segment.shared && greater_than(segment.before_text.length, run)) {
        run = segment.before_text.length;
      }
    }
    let shorter = math_min(a.length, b.length);
    let a2 = multiply(run, 2);
    let grew = greater_than_equal(a2, shorter) && greater_than(shorter, 0);
    let kept = equal(a, b) || reworded || grew;
    let weight = kept ? text_segments_shared_size(segments) + 1 : 0;
    let r = {
      kept,
      segments,
      weight,
    };
    return r;
  }
  let pairs = [];
  for (let i = 0; less_than(i, size_before); i++) {
    let row = [];
    for (let j = 0; less_than(j, size_after); j++) {
      let v = compared(before[i], after[j]);
      row.push(v);
    }
    pairs.push(row);
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
      let pair = pairs[i][j];
      let take = pair.kept ? best[i + 1][j + 1] + pair.weight : 0;
      best[i][j] = math_max(skip, take);
    }
  }
  let entries = [];
  let gone = [];
  let brought = [];
  function flush() {
    let rows = diff_lines_run_paired(gone, brought);
    list_add_multiple(entries, rows);
    gone = [];
    brought = [];
  }
  let i = 0;
  let j = 0;
  while (less_than(i, size_before) && less_than(j, size_after)) {
    let pair = pairs[i][j];
    let taken =
      pair.kept && equal(best[i][j], best[i + 1][j + 1] + pair.weight);
    if (taken) {
      flush();
      if (equal(before[i], after[j])) {
        list_add(entries, {
          changed: false,
          line: " " + before[i],
        });
      } else {
        list_add(entries, {
          changed: true,
          segments: pair.segments,
        });
      }
      i = i + 1;
      j = j + 1;
      continue;
    }
    if (greater_than_equal(best[i + 1][j], best[i][j + 1])) {
      list_add(gone, before[i]);
      i = i + 1;
      continue;
    }
    list_add(brought, after[j]);
    j = j + 1;
  }
  while (less_than(i, size_before)) {
    list_add(gone, before[i]);
    i = i + 1;
  }
  while (less_than(j, size_after)) {
    list_add(brought, after[j]);
    j = j + 1;
  }
  flush();
  return entries;
}
