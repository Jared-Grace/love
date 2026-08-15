import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { git_history_blobs } from "./git_history_blobs.mjs";
import { path_folders_containing } from "./path_folders_containing.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function git_history_folder_bytes(folder) {
  "$plain folder";
  "What each folder in this repository's history weighs, heaviest first, and how much of that weight the present no longer has any use for.";
  "The reading to open when the question is what to stop keeping. A list of files is too long to look at and too fine to decide from; a folder is the thing somebody actually has an opinion about, because a folder is what a rule can be written against. Anything built rather than written is a folder, and so is anything downloaded.";
  "Each file counts towards every folder above it, so an outer folder holds the whole of what is inside it and the numbers are read down a branch rather than added across the list. They will not sum to the whole repository for that reason, which is on purpose - both questions are wanted, and only one of them can be answered by a flat list.";
  "The gone weight is the half that can be acted on. What the present still tracks has to stay, whatever it weighs; what the present has let go of is being carried for nothing, and the difference between those two is exactly the decision being made.";
  arguments_assert(arguments, 1);
  let tracked = await git_head_tracked(folder);
  let blobs = await git_history_blobs(folder);
  let held = {};
  let dropped = {};
  for (let blob of blobs) {
    let alive_path = tracked.paths[blob.path];
    let alive_blob = tracked.blob_names[blob.name];
    let alive = alive_path || alive_blob;
    let tally = alive ? held : dropped;
    for (let name of path_folders_containing(blob.path)) {
      tally_number_add(held, name, 0);
      tally_number_add(dropped, name, 0);
      tally_number_add(tally, name, blob.bytes);
    }
  }
  let rows = [];
  for (let name of object_property_names(held)) {
    let row = {
      folder: name,
      bytes: held[name] + dropped[name],
      gone: dropped[name],
    };
    list_add(rows, row);
  }
  function git_history_folder_bytes_weight(row) {
    let n = row.bytes;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(
    rows,
    git_history_folder_bytes_weight,
  );
  return ranked;
}
