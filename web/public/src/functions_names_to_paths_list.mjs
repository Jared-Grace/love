import { object_pick } from "../../../love/public/src/object_pick.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
export async function functions_names_to_paths_list(f_names) {
  let dictionary = await functions_names_to_paths();
  let expanded_paths = object_pick(dictionary, f_names);
  return expanded_paths;
}
