import { arguments_assert } from "./arguments_assert.mjs";
import { module_dirname } from "./module_dirname.mjs";
import { folder_public_dev } from "./folder_public_dev.mjs";
import { folder_repo_relative_resolve } from "./folder_repo_relative_resolve.mjs";
export async function module_public_dev_resolve(meta) {
  "$plain meta";
  "The folder every app's working build is written into, as a full path on this machine, found by walking up from the file that asked.";
  "IT EXISTS SO THAT THE DEV FOLDER CAN BE SERVED BY ITS OWN NAME RATHER THAN BY BEING INSIDE SOMETHING ELSE. It is reachable today only because it happens to sit under the published folder, which is served whole - so the address a phone opens a working build at is an accident of where the folder is kept, and moving the folder anywhere else would take every one of those addresses down without a word. Asked for by name, it keeps answering wherever it is kept.";
  "It asks its neighbour for the walk and only names the folder, so the two of them cannot come to disagree about where this repo is.";
  arguments_assert(arguments, 1);
  let dirname = await module_dirname(meta);
  let relative = folder_public_dev();
  let result = await folder_repo_relative_resolve(dirname, relative);
  return result;
}
