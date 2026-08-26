import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
export function folder_public_absolute() {
  "The folder that goes to the internet, spelled from the root, worked out from where this is standing rather than looked up by the name of a repo.";
  "The other way to reach it is to ask which repo this machine is currently pointed at and join the public folder onto that. That answer lives in a setting nobody commits, so inside a frozen copy of the repo - which is where every gate is actually judged - the question comes back with no repo of that name and throws.";
  "A gate that throws writes down no offenders, and a gate that named nobody cannot be shown to be about somewhere else, so it holds every app out of every deployment. Measured 2026-08-26: two gates in a row were doing exactly this, and between them they made sixteen judged commits unshippable for every app.";
  "Standing where the code stands is also the only reading that is right in both places at once. Inside a frozen copy it names that copy's public folder, which is the commit being judged; in the working folder it names the working folder's, which is what is waiting to be sent. A name looked up in a setting names the same one place whichever copy is asking.";
  arguments_assert(arguments, 0);
  let here = folder_current_absolute();
  let relative = folder_public();
  let folder = path_join([here, relative]);
  return folder;
}
