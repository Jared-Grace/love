import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { git_history_blobs } from "./git_history_blobs.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function git_history_paths_absent_at_head(folder) {
  "Every path this repository's history still carries that its current commit no longer tracks, each with the packed bytes it holds, heaviest first.";
  "This is the reading a history rewrite has to be argued from, and it is the half of that job that is safe to run at any moment: it only reads, it changes nothing, and it can be asked again straight afterwards to check the answer moved. Which of these paths should actually go is a judgment and stays with the human - a folder can look like build output and be the source it was built from, and the size is exactly what makes the wrong one look right.";
  "Only paths absent at HEAD, because a path the present still tracks is not a candidate for anything, and only blobs the present does not hold either, because a blob living at both a live path and a dead one survives whatever the dead path does.";
  "One line of git's object listing names one object once, at the first path it was reached by, so nothing here is counted twice.";
  arguments_assert(arguments, 1);
  let tracked = await git_head_tracked(folder);
  let blobs = await git_history_blobs(folder);
  let tally = {};
  for (let blob of blobs) {
    let alive_path = tracked.paths[blob.path];
    if (alive_path) {
      continue;
    }
    let alive_blob = tracked.blob_names[blob.name];
    if (alive_blob) {
      continue;
    }
    tally_number_add(tally, blob.path, blob.bytes);
  }
  let rows = [];
  for (let path of object_property_names(tally)) {
    let row = {
      path,
      bytes: tally[path],
    };
    list_add(rows, row);
  }
  function git_history_paths_absent_at_head_bytes(row) {
    let n = row.bytes;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(
    rows,
    git_history_paths_absent_at_head_bytes,
  );
  return ranked;
}
