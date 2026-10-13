import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function durations_near_each(rows, rows_other, seconds_tolerance) {
  arguments_assert(arguments, 3);
  ("$plain rows");
  ("$plain rows_other");
  ("$plain seconds_tolerance");
  ("For each recording on one side, the recordings on the other side that are the same length to within the slack handed in - one answer per recording asked about, even when that answer is nothing.");
  ("★ EVERY ROW ASKED ABOUT COMES BACK, INCLUDING THE ONES THAT MATCHED NOTHING, because matching nothing is the finding. A session whose source is no longer in the download folder is exactly the case somebody needs told about, and a list of only the pairs that matched reports it as silence - indistinguishable from a session nobody asked about.");
  ("★ THIS IS A SCREEN AND NEVER A VERDICT. Two recordings of the same length are very often two different singings: measured over one real folder, lengths agreeing to a thousandth of a second belonged to two different psalms. What this is for is cutting hundreds of possible pairs down to a handful cheaply, so that the expensive comparison - taking one recording away from the other - is run only on the handful. A caller that treats a near length as an answer has skipped the only step that decides.");
  ("The slack is handed in rather than chosen here, because it belongs to whatever changed the lengths. Sound that has been through a resampling arrives a fraction of a second different; sound copied byte for byte does not. Only the caller knows which crossing its two sides made.");
  ("The comparison is strictly inside the slack rather than up to and including it, so a slack of zero means the lengths must agree exactly and does not quietly admit everything.");
  let answers = [];
  for (let row of rows) {
    let near = [];
    for (let row_other of rows_other) {
      let gap = subtract(row.seconds, row_other.seconds);
      let gap_size = abs(gap);
      let near_is = less_than(gap_size, seconds_tolerance);
      if (near_is) {
        list_add(near, row_other);
      }
    }
    list_add(answers, {
      row,
      near,
    });
  }
  return answers;
}
