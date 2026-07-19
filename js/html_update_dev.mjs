import { html_overwrite } from "./html_overwrite.mjs";
import { list_add_join_newline } from "./list_add_join_newline.mjs";
import { html_update_externals } from "./html_update_externals.mjs";
import { html_code_script_module } from "./html_code_script_module.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { function_name_to_path_import_code_root_multiple_map } from "./function_name_to_path_import_code_root_multiple_map.mjs";
import { app_shared_context_initialize } from "./app_shared_context_initialize.mjs";
import { js_code_call_app_context_initialize } from "./js_code_call_app_context_initialize.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { function_name_repo_path_combine } from "./function_name_repo_path_combine.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
export async function html_update_dev(name) {
  let v2 = await app_shared_name_search_info(name);
  name = property_get(v2, "a_name");
  let file_path = html_name_to_path_dev(name);
  let a_name = app_shared_name_prefixed(name);
  let path = await function_name_repo_path_combine(a_name, file_path);
  let name_prefixed = await app_shared_name_main(name);
  let call = js_code_call_app_context_initialize(name_prefixed);
  let imports = [name_prefixed, app_shared_context_initialize.name];
  let mapped =
    await function_name_to_path_import_code_root_multiple_map(imports);
  list_add(mapped, call);
  let middle = list_join_newline(mapped);
  let body = html_code_script_module(middle);
  var v = await html_update_externals(name_prefixed);
  let scripts = property_get(v, "scripts");
  let joined = list_add_join_newline(scripts, body);
  await html_overwrite(name, path, joined);
  return path;
}
