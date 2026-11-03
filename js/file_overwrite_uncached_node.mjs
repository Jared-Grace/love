import { arguments_assert } from "./arguments_assert.mjs";
import { file_path_deciding_refuse } from "./file_path_deciding_refuse.mjs";
import { folder_public_root_blocked_assert } from "./folder_public_root_blocked_assert.mjs";
import { file_overwrite_unfenced } from "./file_overwrite_unfenced.mjs";
export async function file_overwrite_uncached_node(file_path, contents) {
  "$plain file_path";
  "$plain contents";
  "Writing one file to a real disk: the half of an overwrite that only a build machine can do.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. The check that chooses between this and a browser's own store decides which machine RUNS this and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so every page that saved anything at all was carrying a public-folder guard, a parent-folder maker, a temp-file namer and the note-what-to-commit machinery, in order never to run a line of it. Asked for by name at the moment it is wanted, none of it is in the page.";
  arguments_assert(arguments, 2);
  await file_path_deciding_refuse(file_path);
  await folder_public_root_blocked_assert(file_path);
  await file_overwrite_unfenced(file_path, contents);
}
