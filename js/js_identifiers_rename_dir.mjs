import { js_identifiers_rename_dir_check } from "./js_identifiers_rename_dir_check.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { js_identifiers_rename_dir_lambda } from "./js_identifiers_rename_dir_lambda.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { file_move } from "./file_move.mjs";
("Rename a fn across a flat directory (one ./<name>.mjs per fn): rewrite the identifier");
("at every site in every file, then move before.mjs to after.mjs. Hermetic — no global");
("dictionary — so it is the sandbox-testable heart of the repo-wide ",
  fn_name("function_rename"),
  ".");
export async function js_identifiers_rename_dir(dir, name_before, name_after) {
  await js_identifiers_rename_dir_check(dir, name_after);
  let lambda = js_identifiers_rename_dir_lambda(name_before, name_after);
  let files = await folder_read_files(dir);
  async function transform_file(file) {
    let f_path = path_join([dir, file]);
    await file_js_transform(f_path, lambda);
  }
  await list_map_unordered_async(files, transform_file);
  let path_before = js_file_dir_path(dir, name_before);
  let path_after = js_file_dir_path(dir, name_after);
  await file_move(path_before, path_after);
}
