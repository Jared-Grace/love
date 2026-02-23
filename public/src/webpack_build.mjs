import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { webpack_build_code_import } from "../../../love/public/src/webpack_build_code_import.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { command_line_text_env_vars } from "../../../love/public/src/command_line_text_env_vars.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { folder_scripts_join_mjs } from "../../../love/public/src/folder_scripts_join_mjs.mjs";
import { folder_current_join } from "../../../love/public/src/folder_current_join.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let main_pah = property_get(a, "main_path");
  let combined = function_name_combine(f_name, "run");
  let path2 = path_join(["temp", combined]);
  let f_name_ext = folder_scripts_join_mjs(path2);
  async function lambda(entry) {
    let fns = [f_name, app_context_initialize.name];
    function lambda2(item) {}
    let mapped = list_map(list, lambda2);
    let i = webpack_build_code_import(f_name);
    let call = js_code_call_app_context_initialize(f_name);
    let joined2 = list_join_newline([i, call]);
    await file_overwrite(entry, joined2);
    const entry_path = folder_current_join(entry);
    let env_vars = {
      [webpack_config_entry_path()]: entry_path,
    };
    let f_name_ext = folder_scripts_join_mjs("webpack.config");
    let combined2 = text_combine("npx webpack --config ", f_name_ext);
    let command = await command_line_text_env_vars(env_vars, combined2);
    let stdout = await command_line(command);
    return stdout;
  }
  let result = await file_delete_after(f_name_ext, lambda);
  return result;
}
