import { function_name_repo_path_combine } from "../../../karate_code/public/src/function_name_repo_path_combine.mjs";
import { js_code_braces_empty } from "../../../love/public/src/js_code_braces_empty.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
export async function html_update_public(name) {
  let a_name = app_name_prefixed(name);
  let file_path = html_name_to_path(name);
  let joined = await function_name_repo_path_combine(a_name, file_path);
  let code = await function_dependencies_code(a_name);
  let call = js_code_call_statement(a_name);
  let right = js_code_braces_empty();
  let global_init = js_code_let_assign("global", right);
  const middle = `${global_init}
    ${call}
    ${code}`;
  let body = html_code_script_module(middle);
  await html_overwrite(name, joined, body);
  await file_open(joined);
}
