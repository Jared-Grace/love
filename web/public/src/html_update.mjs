import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { file_open } from "./file_open.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
export async function html_update(name) {
  let file_path = html_name_to_path(name);
  const name_prefixed = `app_${name}`;
  let ext = function_name_extension();
  let call = js_code_call_statement(name_prefixed);
  let f_name_ext = function_name_to_base(name_prefixed);
  const from = folder_current_join_code(f_name_ext);
  let code = js_code_import_single(name_prefixed, from);
  let body = `<script type="module"> 
    ${code}
    import { ${name_prefixed} } from './${name_prefixed}${ext}';
    ${call}
  </script>`;
  await html_overwrite(name, body);
  await file_open(file_path);
}
