import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { file_open } from "./file_open.mjs";
import { function_open } from "./function_open.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
import { code_calls_name_is } from "./code_calls_name_is.mjs";
import { or } from "./or.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_open_names() {
  "Every fn that puts a VS Code window on the human's screen, by calling one of the two fns that do it";
  "Those refuse on the ai seam, so this is also the list a Claude cannot run and a permission rule must never name";
  "A fn that only hands one of the two names to something else is left out, since naming a thing is not doing it, and the list is read as though everything on it opens a window";
  let by_file = await data_identifiers_search(file_open.name);
  let by_function = await data_identifiers_search(function_open.name);
  let names = properties_get(by_file);
  let more = properties_get(by_function);
  list_add_multiple(names, more);
  let unique = list_unique(names);
  let openers = [];
  for (let name of unique) {
    let by_one = await function_calls_name_is(name, file_open.name);
    let by_two = await function_calls_name_is(name, function_open.name);
    let calls = or(by_one, by_two);
    if (calls) {
      list_add(openers, name);
    }
  }
  return openers;
}
