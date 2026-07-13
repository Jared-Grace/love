import { list_map } from "./list_map.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_supper_chosen_from_options(folders, options) {
  function lambda(folder) {
    let found = list_find_property_or_null(options, "bible_folder", folder);
    let exists = null_not_is(found);
    if (exists) {
      return found;
    }
    let choice = {
      name: folder,
      bible_folder: folder,
    };
    return choice;
  }
  let chosen = list_map(folders, lambda);
  return chosen;
}
