import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
import { path_join } from "./path_join.mjs";
export function web_assets_folder_absolute() {
  "The assets folder spelled from the root, worked out from where this is standing rather than looked up by the name of a repo.";
  "ITS NEIGHBOUR ASKS WHICH REPO THIS MACHINE IS POINTED AT, and that answer lives in a setting nobody commits - so inside the frozen copy every gate is judged in, the question comes back with no repo of that name and throws. A gate that throws writes down no offender, and a gate naming nobody cannot be shown to be about somewhere else, so it holds every app out of every deployment.";
  "Standing where the code stands is also the only reading that is right in both places at once. In the frozen copy it names the assets of the commit being judged; in the working folder it names the ones waiting to be sent up.";
  arguments_assert(arguments, 0);
  let here = folder_current_absolute();
  let relative = web_assets_folder_name();
  let folder = path_join([here, relative]);
  return folder;
}
