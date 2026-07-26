import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { file_open } from "./file_open.mjs";
import { function_open } from "./function_open.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function function_open_names() {
  "Every fn that puts a VS Code window on the human's screen, by calling one of the two fns that do it";
  "Those refuse on the ai seam, so this is also the list a Claude cannot run and a permission rule must never name";
  let by_file = await data_identifiers_search(file_open.name);
  let by_function = await data_identifiers_search(function_open.name);
  let names = properties_get(by_file);
  let more = properties_get(by_function);
  list_add_multiple(names, more);
  let unique = list_unique(names);
  return unique;
}
