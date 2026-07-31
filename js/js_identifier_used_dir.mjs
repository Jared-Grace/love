import { fn_name } from "./fn_name.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
("Is `name` referenced by any file OTHER than its own ./<name>.mjs in this flat dir?");
("The hermetic analog of the ambient ",
  fn_name("data_identifiers_search"),
  " — scans the dir, not the");
("global registry, so it runs the same in a sandbox. Backs the dir-scoped delete-unused.");
export async function js_identifier_used_dir(dir, name) {
  let files = await folder_read_files(dir);
  let name_file = js_file_name(name);
  function is_other(file) {
    let is_self = equal(file, name_file);
    let n = not(is_self);
    return n;
  }
  let others = list_filter(files, is_other);
  async function references(file) {
    let f_path = path_join([dir, file]);
    let parsed = await file_js_parse(f_path);
    let ast = property_get(parsed, "ast");
    let names = js_identifiers_names(ast);
    let has = list_includes(names, name);
    return has;
  }
  let bools = await list_map_unordered_async(others, references);
  let used = list_includes(bools, true);
  return used;
}
