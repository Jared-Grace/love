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
  function lambda() {}
  let r2 = await html_update_externals_dependencies(
    app_name,
    [app_context_initialize.name],
    lambda,
  );
  return r2;
  await html_overwrite(name, path, joined2);
  let call = js_code_call_app_context_initialize(name_prefixed);
}
