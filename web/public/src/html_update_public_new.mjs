import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { html_update_externals_dependencies } from "../../../love/public/src/html_update_externals_dependencies.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_public_new() {
  let search = "rce";
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let f_path = property_get(r, "f_path");
  let a_name = property_get(r, "a_name");
  function lambda() {
    let result = js_code_call_app_context_initialize(app_name);
    return result;
  }
  let r2 = await html_update_externals_dependencies(
    app_name,
    [app_context_initialize.name],
    lambda,
  );
  let dependencies = property_get(r2, "dependencies");
  let scripts = property_get(r2, "scripts");
  let code = property_get(dependencies, "code");
  let code2 = html_code_script_module(code);
  list_add(scripts, code2);
  let joined = list_join_newline(scripts);
  log({
    a_name,
    f_path,
    joined,
  });
  await html_overwrite(a_name, f_path, joined);
}
