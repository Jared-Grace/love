import { property_path_get_2 } from "./property_path_get_2.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { not } from "./not.mjs";
export async function permission_settings_local_unwatched() {
  "every allow rule the per-machine settings file grants that the shared one does not";
  "the guard reads both files and the generated system watches only one, so a rule written here is a standing approval no gate can see - the shared file is regenerated from a list a human names things to, and nothing at all regenerates this one";
  "measured on the day it was written: thirty-six rules, three of them naming the promote and deploy commands, and one of those a function the safety check refuses outright for taking arguments that can become a command line";
  "answers a list rather than throwing, because what to do about a rule found here is a judgment - a grant meant on purpose belongs in the watched list where the ratchet can hold it, and one nobody remembers writing belongs nowhere";
  "the file is per-machine, so another machine having none of it is the ordinary case and answers an empty list rather than failing";
  let paths = permission_settings_paths();
  let shared_path = list_first(paths);
  let local_path = list_second(paths);
  let absent = await file_exists_not(local_path);
  if (absent) {
    let none = [];
    return none;
  }
  let local = await file_read_json(local_path);
  let held = property_exists(local, "permissions");
  if (not(held)) {
    let none2 = [];
    return none2;
  }
  let local_permissions = property_get(local, "permissions");
  let listed = property_exists(local_permissions, "allow");
  if (not(listed)) {
    let none3 = [];
    return none3;
  }
  let local_allow = property_get(local_permissions, "allow");
  let shared = await file_read_json(shared_path);
  let shared_allow = property_path_get_2(shared, "permissions", "allow");
  let unwatched = list_without_multiple(local_allow, shared_allow);
  return unwatched;
}
