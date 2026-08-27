import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_json_path() {
  "Where the file that decides what is sent to the internet sits, spelled from the root.";
  "Worked out from where this is standing rather than looked up by the name of a repo. A gate is judged inside a frozen copy, and a name looked up in an uncommitted setting has no answer there, so the lookup throws and the gate names nobody - which reads as every app being unshippable rather than as the gate having failed to ask.";
  arguments_assert(arguments, 0);
  let here = folder_current_absolute();
  let path = path_join([here, "firebase.json"]);
  return path;
}
