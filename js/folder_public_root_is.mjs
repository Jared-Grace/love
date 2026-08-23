import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { folder_public } from "./folder_public.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
import { path_normalize } from "./path_normalize.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
export function folder_public_root_is(file_path) {
  "$plain file_path";
  "Whether a path names a file lying directly in a folder called public, rather than anywhere else";
  "Directly, and not merely somewhere underneath. The stage an app is checked at and the folder people work in both sit inside that same folder, and both are written to constantly while nothing is being sent - so a rule reaching down into them would refuse ordinary work all day. Only the top of that folder is what a sending walks.";
  "The folder holding the file is the only part of the path that decides, so the path is reduced to its parts and the one before the last is read. That answers the same way whether it arrived spelled from here, from a folder above, or from the root of the disk.";
  arguments_assert(arguments, 1);
  let normalized = path_normalize(file_path);
  let parts = text_split_slash_forward(normalized);
  let depth = list_size(parts);
  let parent_index = subtract(depth, 2);
  let parent = list_get_or_null(parts, parent_index);
  let public_name = folder_public();
  let root = equal(parent, public_name);
  return root;
}
