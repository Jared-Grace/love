import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { list_add } from "./list_add.mjs";
export function path_folders_containing(path) {
  "$plain path";
  "Every folder a path sits inside, from the outermost inwards, not counting the file itself.";
  "For adding a weight up at every level at once. A file deep inside counts towards the folder holding it and towards each folder holding that, so one pass over the files answers what any folder weighs, rather than a pass per folder.";
  "A file with no folder above it belongs to none, so that answer is nothing rather than a folder with an empty name.";
  arguments_assert(arguments, 1);
  let parts = text_split_slash_forward(path);
  let depth = list_size(parts);
  let folders = [];
  let index = 1;
  while (less_than(index, depth)) {
    let held = list_slice(parts, 0, index);
    let folder = list_join_slash_forward(held);
    list_add(folders, folder);
    index = index + 1;
  }
  return folders;
}
