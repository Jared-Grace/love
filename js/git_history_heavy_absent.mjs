import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { git_history_heavy_bytes_least } from "./git_history_heavy_bytes_least.mjs";
import { git_history_heavy_row_is } from "./git_history_heavy_row_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function git_history_heavy_absent() {
  "The paths this repo's history is still carrying that the present no longer has, big enough to be worth someone's attention, named alone without their weights.";
  "The names alone because this is what a ratchet compares, and a ratchet compares things that either match or do not. A weight moves on its own as the packing changes, so a list carrying weights would differ from the last one without anything having happened.";
  "Reads the checkout that holds the history rather than the copy the gates run against, since the copy has no past to read.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let rows = await git_history_paths_absent_at_head(folder);
  let heavy = list_filter(rows, git_history_heavy_row_is);
  let paths = list_map_property(heavy, "path");
  return paths;
}
