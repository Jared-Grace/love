import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function apps_names_file_path() {
  arguments_assert(arguments, 0);
  ("Where one repo writes down the name of every app it holds, said once here so that nothing else spells it.");
  ("It is one path asked of every repo rather than one list naming everybody, because a repo already answers for its own pages and should answer for its own names the same way. A single list would have to name apps living somewhere else, and the repo they live in could be renamed, moved or taken away without the list ever noticing.");
  ("It sits in the given half of the data folder because a person writes it. Nothing works it out: an app's name and the names of its own functions run together across the underscore, so a page called g_bible and a helper called g_arcs are the same shape, and no reading of the names alone can tell which of the two is an app.");
  let folder = data_given_folder();
  let path = path_join([
    folder,
    text_combine_multiple([fn_name("apps_names"), ".json"]),
  ]);
  return path;
}
