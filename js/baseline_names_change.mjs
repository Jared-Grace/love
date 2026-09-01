import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
export async function baseline_names_change(offenders, path) {
  arguments_assert(arguments, 2);
  ("$plain offenders");
  ("the names offending right now, as a reading of the repo just found them.");
  ("$plain path");
  ("where the record of what was already known to offend is kept.");
  ("What a ratchet's record says today set against what is offending today: the record itself, the names offending that it does not hold, and the names it holds that have stopped offending.");
  ("★ READING THE RECORD AND TAKING THE COMPARISON APART WAS WRITTEN OUT AT BOTH TEETH OF THE RATCHET. The gate that refuses a change and the writer that shrinks the record each opened the same file, asked the same comparison, and pulled the same two sides out of it - four lines, twice, and the two must agree about what counts as new and what counts as gone or the gate refuses exactly what the writer was about to bless.");
  ("THE RECORD IS HANDED BACK ALONGSIDE THE TWO SIDES, because the writer needs it and reading it a second time would be reading a file that a peer may have rewritten in between. One read, one answer, and both callers reasoning about the same moment.");
  ("IT JUDGES NOTHING. Whether a new offender should stop the build, and whether a gone one should be dropped, are opposite answers at the two callers - so both are left to them and only the difference is worked out here.");
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  let r = {
    recorded,
    added,
    stale,
  };
  return r;
}
