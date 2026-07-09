import { webpack_build_generic_source } from "../../../love/public/src/webpack_build_generic_source.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
import { command_line_text_env_vars } from "../../../love/public/src/command_line_text_env_vars.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { webpack_config_folder } from "../../../love/public/src/webpack_config_folder.mjs";
import { webpack_config_filename } from "../../../love/public/src/webpack_config_filename.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { folder_current_join } from "../../../love/public/src/folder_current_join.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_name_js } from "../../../love/public/src/file_name_js.mjs";
import { folder_scripts_join_mjs } from "../../../love/public/src/folder_scripts_join_mjs.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function webpack_build_generic(
  search,
  config_folder,
  command_text_after,
) {
  let a = await app_shared_name_search_info(search);
  let a_name = property_get(a, "a_name");
  let f_name = property_get(a, "f_name");
  let combined = function_name_combine(f_name, "run");
  let path = path_join(["temp", combined]);
  let f_name_ext = folder_scripts_join_mjs(path);
  let joined = webpack_build_generic_source(f_name);
  let r = file_name_js(a_name);
  async function lambda(entry) {
    await file_overwrite(entry, joined);
    const entry_path = folder_current_join(entry);
    let env_vars = {
      [webpack_config_entry_path()]: entry_path,
      [webpack_config_filename()]: r,
      [webpack_config_folder()]: config_folder,
    };
    let f_name_ext = folder_scripts_join_mjs("webpack.config");
    let combined2 = text_combine_multiple([
      "npx webpack --config ",
      f_name_ext,
      " ",
      command_text_after,
    ]);
    let command = await command_line_text_env_vars(env_vars, combined2);
    let env = object_merge_set(env_vars, process.env);
    let stdout = await command_line_generic(combined2, {
      env,
    });
    return stdout;
  }
  let result = await file_delete_after(f_name_ext, lambda);
  return result;
}
