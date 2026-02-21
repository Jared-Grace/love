import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { html_update_externals_dependencies } from "../../../love/public/src/html_update_externals_dependencies.mjs";
export async function html_update_externals(f_name) {
  const f_names_dependencies = [f_name];
  let r = await html_update_externals_dependencies(
    f_name,
    f_names_dependencies,
    js_code_call_statement,
  );
  return r;
}
