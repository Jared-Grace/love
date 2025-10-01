import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { folder_current_join_code } from "../../../love/public/src/folder_current_join_code.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { html_name_to_path_dev } from "../../../love/public/src/html_name_to_path_dev.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function html_update_dev(name) {
  marker("1");
  let file_path = html_name_to_path_dev(name);
  function paths_get(f_name_ext) {
    let src = folder_src();
    let previous = folder_previous();
    const from_paths = [previous, src, f_name_ext];
    return from_paths;
  }
  const name_prefixed = await app_name_main(name);
  let call = js_code_call_statement(name_prefixed);
  let f_name_ext2 = function_name_to_base(name_prefixed);
  const from_paths2 = paths_get(f_name_ext2);
  let f_path = path_join(from_paths2);
  const from = folder_current_join_code(f_path);
  let code = js_code_import_single(name_prefixed, from);
  const middle = `${code}
    ${call}`;
  let body = html_code_script_module(middle);
  await html_overwrite(name, file_path, body);
  await file_open(file_path);
}
