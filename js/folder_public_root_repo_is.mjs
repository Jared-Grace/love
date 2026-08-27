import { arguments_assert } from "./arguments_assert.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
import { equal } from "./equal.mjs";
export async function folder_public_root_repo_is(file_path) {
  "$plain file_path";
  "Whether a path names a file lying directly at the top of this repo's own published folder, worked out from where the run is standing rather than from a folder merely being called public";
  "Its predecessor asked only whether the part of the path before the last was the word public, which answers yes for every folder of that name anywhere. The frozen copy an app is built inside has one of those, and the building writes into it - so a rule meant for the folder a sending walks was being asked about a copy nothing is ever sent out of.";
  "The path is reduced to a whole one first, so a name spelled from here and the same name spelled from the root come back the same. Nothing is asked of the disk: what a path means is worked out from the text alone, and the file about to be written may not be there yet.";
  arguments_assert(arguments, 1);
  let absolute = await path_resolve(file_path);
  let folder = folder_public_absolute();
  let file_name = path_base(absolute);
  let expected = path_join([folder, file_name]);
  let root = equal(absolute, expected);
  return root;
}
