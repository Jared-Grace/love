import { js_code_braces_empty } from "../../../love/public/src/js_code_braces_empty.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
export async function html_update_public(name) {
  let a_name = app_name_prefixed(name);
  let search = await function_name_to_path_search(a_name);
  let repo_name = object_property_get(search, "repo_name");
  let r_path = repo_path(repo_name);
  let file_path = html_name_to_path(name);
  let joined = path_join([r_path, file_path]);
  let code = await function_dependencies_code(a_name);
  let call = js_code_call_statement(a_name);
  let right = js_code_braces_empty();
  let v = js_code_let_assign("global", right);
  const middle = `${v}
    ${call}
    ${code}`;
  let body = html_code_script_module(middle);
  await html_overwrite(name, joined, body);
  await file_open(joined);
}
