import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { js_flo_params_add } from "./js_flo_params_add.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
("Add a parameter to a fn across a flat directory (one ./<name>.mjs per fn): give the");
("definition a new trailing param, and append the default-value expression as an argument");
("at every call site in every file. Hermetic — no global dictionary — so it is the");
("sandbox-testable heart of the repo-wide param-add tool.");
export async function js_identifier_param_new_dir(
  dir,
  f_name,
  param_name,
  default_value,
) {
  let files = await folder_read_files(dir);
  let def_file = text_combine_multiple([f_name, ".mjs"]);
  async function transform_file(file) {
    let f_path = path_join([dir, file]);
    function edit(ast) {
      if (equal(file, def_file)) {
        js_flo_params_add(ast, [param_name]);
      }
      function on_call({ args, v }) {
        let expression = js_parse_expression(default_value);
        list_add(args, expression);
      }
      js_visit_calls_named(ast, f_name, on_call);
    }
    await file_js_transform(f_path, edit);
  }
  await list_map_unordered_async(files, transform_file);
}
