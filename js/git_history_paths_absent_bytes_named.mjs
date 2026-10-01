import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_set } from "./property_set.mjs";
export async function git_history_paths_absent_bytes_named(folder, paths) {
  "$plain folder";
  "$plain paths";
  "The packed bytes each of the named paths holds in this folder's history, for paths the present no longer tracks.";
  "★ THE WHOLE SWEEP IS ASKED AGAIN RATHER THAN GIT BEING ASKED ABOUT THESE FEW PATHS, BECAUSE A WEIGHT PER PATH IS NOT A PROPERTY OF THE PATH. An object reached at two dead paths is counted once, at the first of them, so a reading bounded by a single path hands back a larger number than the one a gate weighed it with - and two readings of the same file disagreeing by a plausible amount is worse than no second reading at all.";
  "Measured 2026-10-01: the sweep underneath costs about fifty two seconds across eight thousand nine hundred absent paths. So this is for a caller already paying for one - a gate that has gone red, never a gate on its way to passing.";
  "A path the sweep does not name is left out rather than given a nought, because every path this is asked about came out of that same history: a name it cannot weigh means the two readings disagree about what the history holds, which is a fault and not a weight.";
  arguments_assert(arguments, 2);
  let rows = await git_history_paths_absent_at_head(folder);
  let named = {};
  for (let row of rows) {
    let path = property_get(row, "path");
    let wanted = list_includes(paths, path);
    if (wanted) {
      let bytes = property_get(row, "bytes");
      property_set(named, path, bytes);
    }
  }
  return named;
}
