import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_repo_relative_resolve } from "./folder_repo_relative_resolve.mjs";
export async function folder_repo_public_resolve(start_dir) {
  "$plain start_dir";
  "The published folder as a full path on this machine, found by walking up from wherever the asking code stands.";
  "The walk itself belongs to its neighbour, which does the same for any folder in the repo; this one only names which folder.";
  arguments_assert(arguments, 1);
  let relative = folder_public();
  let result = await folder_repo_relative_resolve(start_dir, relative);
  return result;
}
