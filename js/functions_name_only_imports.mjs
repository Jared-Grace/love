import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_code_name_only_imports } from "./js_code_name_only_imports.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { object_keys } from "./object_keys.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function functions_name_only_imports() {
  "Every function that imports a name only to read the word it is called, with the names it does that to";
  "Each one is a road nothing travels: the import is real, so everything the named function reaches counts as reachable from here, while the code never calls it. One line of prose written this way put an entire download chain inside a game screen's reach and turned a gate red for everybody";
  let paths = await functions_names_to_paths();
  let f_names = object_keys(paths);
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      let names = js_code_name_only_imports(code);
      return names;
    }
    ("A file that will not parse is not an answer to this question and must not be");
    ("allowed to become one. It is skipped rather than counted, because a torn or");
    ("half-written file says nothing about how anybody wrote their imports");
    let names = await catch_null_async(read);
    let told = {
      f_name,
      names: names ? names : [],
    };
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  function any_lambda(m) {
    let names = property_get(m, "names");
    let any = greater_than(names.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  return offenders;
}
