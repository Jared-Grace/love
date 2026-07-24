import { js_identifiers_rename_dir_lambda } from "./js_identifiers_rename_dir_lambda.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_move } from "./file_move.mjs";
("Rename a fn across a flat directory (one ./<name>.mjs per fn): rewrite the identifier");
("at every site in every file, then move before.mjs to after.mjs. Hermetic — no global");
("dictionary — so it is the sandbox-testable heart of the repo-wide function_rename.");
export async function js_identifiers_rename_dir(dir, name_before, name_after) {
  let lambda = js_identifiers_rename_dir_lambda(name_before, name_after);
  let files = await folder_read_files(dir);
  async function transform_file(file) {
    let f_path = path_join([dir, file]);
    await file_js_transform(f_path, lambda);
  }
  await list_map_unordered_async(files, transform_file);
  let name_before_file = text_combine_multiple([name_before, ".mjs"]);
  let name_after_file = text_combine_multiple([name_after, ".mjs"]);
  let path_before = path_join([dir, name_before_file]);
  let path_after = path_join([dir, name_after_file]);
  await file_move(path_before, path_after);
}
