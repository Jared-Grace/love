import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { git_history_heavy_row_is } from "./git_history_heavy_row_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
export async function git_history_heavy_absent_walked() {
  "The paths this repo's history is still carrying that the present no longer has, big enough to be worth someone's attention - and how many paths were looked at to find them.";
  "How many were walked travels out beside the offenders because finding none and reaching none are the same answer otherwise. The history is read by asking git for it, so this is exactly the sweep that can start coming back empty - a folder that has moved, a checkout that is no longer there - while the gate standing on it goes on saying clean for ever.";
  "The names alone, without their weights, because this is what a ratchet compares and a ratchet compares things that either match or do not. A weight moves on its own as the packing changes, so a list carrying weights would differ from the last one without anything having happened.";
  "Reads the checkout that holds the history rather than the copy the gates run against, since the copy has no past to read.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let rows = await git_history_paths_absent_at_head(folder);
  let heavy = list_filter(rows, git_history_heavy_row_is);
  let paths = list_map_property(heavy, "path");
  let walked = list_size(rows);
  let r = {
    walked,
    paths,
  };
  return r;
}
