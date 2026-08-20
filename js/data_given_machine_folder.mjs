import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_machine_folder() {
  "The room holding what this computer itself is set up from - the small scripts and settings files that a setup step copies out to where the desktop and the editor look for them.";
  "In the given half because every file here is read to decide something later: what a new window does, what the editor offers to run. The copy that ends up outside the repo is the one that acts; this is the source it is made from, so editing is done here and the setup step run again.";
  arguments_assert(arguments, 0);
  let given = data_given_folder();
  let folder = path_join([given, "machine"]);
  return folder;
}
