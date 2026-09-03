import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_web_latest } from "./folder_web_latest.mjs";
import { path_join } from "./path_join.mjs";
export function folder_web_latest_absolute() {
  "The folder a build waits in until it has been walked, spelled from the root, worked out from where this is standing rather than looked up by the name of a repo.";
  "Standing where the code stands is the only reading that is right in both places at once. Inside a frozen copy it names that copy's waiting folder, which is the commit being judged; in the working folder it names the working folder's. A name looked up in a setting names the same one place whichever copy is asking - and that setting is one nobody commits, so inside a frozen copy the question comes back with no repo of that name and throws.";
  "Its neighbour naming the folder that goes to the internet is the same derivation, and the two are written side by side rather than one built on the other, because what they have in common is the derivation and not the folder.";
  arguments_assert(arguments, 0);
  let here = folder_current_absolute();
  let relative = folder_web_latest();
  let folder = path_join([here, relative]);
  return folder;
}
