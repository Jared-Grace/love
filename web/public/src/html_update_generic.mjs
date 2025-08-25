import { file_open } from "./file_open.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { path_join } from "./path_join.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
export async function html_update_generic(
  name,
  file_path,
  lambda$f_name_ext,
  lambda$fn_get,
) {
  const name_prefixed = await lambda$fn_get(name);
  let call = js_code_call_statement(name_prefixed);
  let f_name_ext = function_name_to_base(name_prefixed);
  const from_paths = await lambda$f_name_ext(f_name_ext);
  let f_path = path_join(from_paths);
  const from = folder_current_join_code(f_path);
  let code = js_code_import_single(name_prefixed, from);
  let body = `<script type="module"> 
    ${code}
    ${call}
  </script>`;
  await html_overwrite(name, file_path, body);
  await file_open(file_path);
}
