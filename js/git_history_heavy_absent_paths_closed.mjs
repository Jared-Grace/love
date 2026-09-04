import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_heavy_absent_kept } from "./git_history_heavy_absent_kept.mjs";
import { less_than } from "./less_than.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { git_history_heavy_row_is } from "./git_history_heavy_row_is.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { git_history_paths_drop_rehearse } from "./git_history_paths_drop_rehearse.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function git_history_heavy_absent_paths_closed() {
  "Every path that has to come out of this repo's past before the gate reading it can come out clean, found by taking the ones it names out on a copy and then asking the copy the same question again.";
  "One pass is provably not enough, and the reason is in how git lists what it is holding. A line of that listing names an object once, at the first path it was ever reached by. So a piece of a build that was written under six names over six rebuilds is charged to one of those six, and the other five are silent. Take the charged one out and the charge moves to the next name in the line, which the gate had never mentioned - so the gate goes red again straight after being made green, naming a path that was there the whole time. That happened twice on 2026-09-03 before it was understood.";
  "So the set is closed here rather than reported once. It drops what it has on a copy of the repo, asks the copy, adds whatever new name the charge moved to, and goes round again until a round finds nothing. Nothing here touches the real past - the answer is a list, and taking it out for real stays a thing a person runs, once, with both remotes unprotected.";
  "The ones being carried on purpose come out of every round, not just the first, because the charge can move onto one of them just as easily.";
  "Each round clones the whole repo and rewrites it, which is minutes rather than seconds, so the rounds are counted and a run that will not settle is stopped rather than left going. Not settling would mean the charge is walking a cycle, and that is a thing to look at rather than to wait out.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let kept = git_history_heavy_absent_kept();
  let rounds_most = 12;
  let paths = [];
  let rounds = [];
  let asked = folder;
  let round_index = 0;
  let settled = false;
  while (less_than(round_index, rounds_most)) {
    let rows = await git_history_paths_absent_at_head(asked);
    let heavy = list_filter_map_property(
      rows,
      git_history_heavy_row_is,
      "path",
    );
    let named = list_without_multiple(heavy, kept);
    let fresh = list_without_multiple(named, paths);
    rounds.push({
      round: round_index,
      walked: list_size(rows),
      fresh,
    });
    if (list_empty_is(fresh)) {
      settled = true;
      break;
    }
    paths = list_concat(paths, fresh);
    let paths_text = list_join_comma(paths);
    let rehearsed = await git_history_paths_drop_rehearse(folder, paths_text);
    asked = property_get(rehearsed, "clone_folder");
    round_index = add(round_index, 1);
  }
  true_is_assert_json(settled, rounds);
  let r = {
    paths,
    rounds,
  };
  return r;
}
