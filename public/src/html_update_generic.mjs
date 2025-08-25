import { file_open } from "./file_open.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { path_join } from "./path_join.mjs";
import { folder_src } from "./folder_src.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
export async function html_update_generic(name, file_path) {
  const name_prefixed = app_name_prefixed(name);
  let call = js_code_call_statement(name_prefixed);
  let f_name_ext = function_name_to_base(name_prefixed);
  let src = folder_src();
  const from_paths = [src, f_name_ext];
  let f_path = path_join(from_paths);
  const from = folder_current_join_code(f_path);
  let code = js_code_import_single(name_prefixed, from);
  let body = `<script type="module"> 
    ${code}
    ${call}
  </script>`;
  await html_overwrite(name, body);
  await file_open(file_path);
}
