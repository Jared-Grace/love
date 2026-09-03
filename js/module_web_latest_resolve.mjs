import { arguments_assert } from "./arguments_assert.mjs";
import { module_dirname } from "./module_dirname.mjs";
import { folder_web_latest } from "./folder_web_latest.mjs";
import { folder_repo_relative_resolve } from "./folder_repo_relative_resolve.mjs";
export async function module_web_latest_resolve(meta) {
  "$plain meta";
  "The folder an app's whole build is written into and checked at, as a full path on this machine, found by walking up from the file that asked.";
  "IT EXISTS SO THAT THE CHECKED STAGE CAN BE SERVED BY ITS OWN NAME RATHER THAN BY BEING INSIDE SOMETHING ELSE. It is reachable today only because it happens to sit under the published folder, which is served whole - so the address the checked build is opened at is an accident of where the folder is kept, and moving the folder anywhere else would take that address down without a word. Asked for by name, it keeps answering wherever it is kept.";
  "Its neighbour does exactly this for the working stage and says the same thing about it. The two are parallel on purpose and neither should be collapsed into the other: they name different folders, and a caller that wanted one and got the other would serve a checked build where a working one was meant, or the reverse, with nothing to show for it.";
  "It asks its neighbour for the walk and only names the folder, so the two of them cannot come to disagree about where this repo is.";
  arguments_assert(arguments, 1);
  let dirname = await module_dirname(meta);
  let relative = folder_web_latest();
  let result = await folder_repo_relative_resolve(dirname, relative);
  return result;
}
