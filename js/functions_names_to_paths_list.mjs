import { list_empty_is } from "./list_empty_is.mjs";
import { object_pick } from "./object_pick.mjs";
import { functions_names_to_paths_import } from "./functions_names_to_paths_import.mjs";
export async function functions_names_to_paths_list(f_names) {
  "Where the names asked about are none, the answer is none, and it is known";
  "before anything is read. Reaching the map to hear it lists every function";
  "file in every repo and names each one - 43ms, spent twice on every command,";
  "because the only caller asks about the expansions of an acronym and a name";
  "spelled in full has none.";
  let none = list_empty_is(f_names);
  if (none) {
    let r = {};
    return r;
  }
  let paths_read = await functions_names_to_paths_import();
  let dictionary = await paths_read();
  let expanded_paths = object_pick(dictionary, f_names);
  return expanded_paths;
}
