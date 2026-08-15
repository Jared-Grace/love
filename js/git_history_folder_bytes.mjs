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
  "The gone weight is the half that can be acted on. What the present still holds has to stay, whatever it weighs; every earlier version of it is being carried for nothing, and the difference between those two is exactly the decision being made.";
  "Whether the present still holds a file is asked of the file itself and never of its name. Its neighbour asks by name, rightly, because a rewrite is told which names to drop - but a folder that is rebuilt keeps every one of its names forever while replacing what is under them, so asking by name there answers that the whole of it is still wanted when almost none of it is. Asked that way, the folder holding this repository's builds reported one twenty-fourth of its weight as dead; asked of the files, nearly two thirds of it is.";
  arguments_assert(arguments, 1);
  let tracked = await git_head_tracked(folder);
  let blobs = await git_history_blobs(folder);
  let held = {};
  let dropped = {};
  for (let blob of blobs) {
    let alive = tracked.blob_names[blob.name];
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
