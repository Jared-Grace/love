import { list_add_join_newline } from "../../../love/public/src/list_add_join_newline.mjs";
import { html_update_externals } from "../../../love/public/src/html_update_externals.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { function_name_repo_path_combine } from "../../../love/public/src/function_name_repo_path_combine.mjs";
export async function html_update_public_generic(f_name, file_path, name) {
  let joined = await function_name_repo_path_combine(f_name, file_path);
  var v = await html_update_externals(f_name);
  let scripts = property_get(v, "scripts");
  let dependencies = property_get(v, "dependencies");
  let code = property_get(dependencies, "code");
  let body = html_code_script_module(code);
  let joined2 = list_add_join_newline(scripts, body);
  await html_overwrite(name, joined, joined2);
  await file_open(joined);
}
