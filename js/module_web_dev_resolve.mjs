import { arguments_assert } from "./arguments_assert.mjs";
import { module_dirname } from "./module_dirname.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { folder_repo_relative_resolve } from "./folder_repo_relative_resolve.mjs";
export async function module_web_dev_resolve(meta) {
  "$plain meta";
  "The folder every app's working build is written into, as a full path on this machine, found by walking up from the file that asked.";
  "IT EXISTS SO THAT THE DEV FOLDER CAN BE SERVED BY ITS OWN NAME RATHER THAN BY BEING INSIDE SOMETHING ELSE. Until 2026-09-03 it was reachable only because it happened to sit under the published folder, which is served whole - so the address a phone opens a working build at was an accident of where the folder was kept, and moving the folder anywhere else would have taken every one of those addresses down without a word. It moved that day, out from under the published folder to stand beside it, and every one of those addresses answered on through it because this had been written first. Asked for by name, it keeps answering wherever it is kept.";
  "It asks its neighbour for the walk and only names the folder, so the two of them cannot come to disagree about where this repo is.";
  arguments_assert(arguments, 1);
  let dirname = await module_dirname(meta);
  let relative = folder_web_dev();
  let result = await folder_repo_relative_resolve(dirname, relative);
  return result;
}
