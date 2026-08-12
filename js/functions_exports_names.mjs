import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_exports_names } from "./js_exports_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { path_join } from "./path_join.mjs";
import { property_set } from "./property_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
export async function functions_exports_names() {
  "Every function file here, keyed by where it sits, beside the names it gives out for others to import";
  "The place is written one settled way, so that a path arrived at by following an import line and a path read off the list of files can be compared at all. Two spellings of one file would otherwise read as two files, and the name one of them gives out would look absent from the other.";
  "A file that will not read or will not parse is left out rather than recorded as giving out nothing. Recorded as empty, it would answer every import of it as unexported - one torn file turning into a red mark against every neighbour that leans on it.";
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let given = {};
  async function record(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      let ast = js_parse(code);
      let exported = js_exports_names(ast);
      return exported;
    }
    let names = await catch_null_async(read);
    let torn = equal(names, null);
    if (torn) {
      return;
    }
    let settled = path_join([f_path]);
    property_set(given, settled, names);
  }
  await list_map_unordered_async(f_names, record);
  return given;
}
