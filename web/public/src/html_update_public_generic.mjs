import { function_dependencies_code_call } from "../../../love/public/src/function_dependencies_code_call.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { function_name_repo_path_combine } from "../../../love/public/src/function_name_repo_path_combine.mjs";
export async function html_update_public_generic(f_name, file_path, name) {
  let joined = await function_name_repo_path_combine(f_name, file_path);
  const middle = await function_dependencies_code_call(f_name);
  let body = html_code_script_module(middle);
  await html_overwrite(name, joined, body);
  await file_open(joined);
}
