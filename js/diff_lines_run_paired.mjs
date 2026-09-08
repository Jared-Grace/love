import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { diff_line_segments_reworded } from "./diff_line_segments_reworded.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function diff_lines_run_paired(gone, brought) {
  "$plain gone";
  "$plain brought";
  "One stretch of a change where some lines go out and some come in, turned into the rows a page draws: one row per line where each line that went out was reworded into the line that came in, and otherwise the lines exactly as they came, all the goings and then all the comings.";
  "★ EITHER EVERY LINE PAIRS OR NONE OF THEM DOES, and that is deliberately stricter than pairing the ones that happen to match. Pairing some of them reorders the rest: a stretch written as three removals followed by three additions would come back as a removal, a rewording, a removal, an addition - and a reader who wrote those three lines as a block no longer sees a block. The order lines were written in is information, and it is lost quietly.";
  "COUNTS THAT DIFFER ARE NOT PAIRED AT ALL, before any line is compared. Where two lines went out and three came in, at least one of the three arrived rather than replaced anything, and nothing here can say which - so every choice of pairing is a guess, and the drawing would be showing a guess in the same style it shows a fact.";
  "A LINE THAT SIMPLY WENT OR SIMPLY CAME IS THE ORDINARY CASE AND FALLS OUT OF THIS UNCHANGED. That is the whole reason the rows carry the line as it came rather than a comparison with an empty line: drawn from a comparison, an added line would be a line every character of which is marked, which is true and is not what anybody reads it as.";
  arguments_assert(arguments, 2);
  let entries = [];
  let count = gone.length;
  let matched = equal(count, brought.length);
  let paired = [];
  let k = 0;
  while (matched && less_than(k, count)) {
    let segments = diff_line_segments_reworded(gone[k], brought[k]);
    let apart = null_is(segments);
    if (apart) {
      matched = false;
    }
    if (not(apart)) {
      list_add(paired, segments);
    }
    k = k + 1;
  }
  if (matched) {
    for (let segments of paired) {
      list_add(entries, {
        changed: true,
        segments: segments,
      });
    }
    return entries;
  }
  for (let before of gone) {
    list_add(entries, {
      changed: false,
      line: "-" + before,
    });
  }
  for (let after of brought) {
    list_add(entries, {
      changed: false,
      line: "+" + after,
    });
  }
  return entries;
}
