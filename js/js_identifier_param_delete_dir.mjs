import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_param_index } from "./function_param_index.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
("Delete a parameter from a fn across a flat directory (one ./<name>.mjs per fn): drop");
("the named param from the definition, then strip the argument at that same index from");
("every call site in every file. The index is read once from the definition and reused,");
("so callers stay aligned. Hermetic — no global dictionary — so it is the sandbox-testable");
("heart of the repo-wide param-delete tool.");
export async function js_identifier_param_delete_dir(dir, f_name, param_name) {
  let files = await folder_read_files(dir);
  let def_path = js_file_dir_path(dir, f_name);
  let index = null;
  function edit_def(ast) {
    let found = function_param_index(ast, param_name);
    let params = property_get(found, "params");
    index = property_get(found, "index");
    list_remove_at(params, index);
  }
  await file_js_transform(def_path, edit_def);
  async function strip_calls(file) {
    let f_path = path_join([dir, file]);
    function edit(ast) {
      function on_call({ args, v }) {
        list_remove_at(args, index);
      }
      js_visit_calls_named(ast, f_name, on_call);
    }
    await file_js_transform(f_path, edit);
  }
  await list_map_unordered_async(files, strip_calls);
}
