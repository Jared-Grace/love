import { webpack_build_generic_source } from "./webpack_build_generic_source.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { npx_run } from "./npx_run.mjs";
import { file_delete_after } from "./file_delete_after.mjs";
import { webpack_config_folder } from "./webpack_config_folder.mjs";
import { webpack_config_filename } from "./webpack_config_filename.mjs";
import { webpack_config_entry_path } from "./webpack_config_entry_path.mjs";
import { folder_current_join } from "./folder_current_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { folder_scripts_join_mjs } from "./folder_scripts_join_mjs.mjs";
import { path_join } from "./path_join.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
export async function webpack_build_generic(
  search,
  config_folder,
  words_after,
) {
  "What follows the config path arrives as a list of words, so a caller wanting two flags passes two words rather than one string that has to be split apart again.";
  let a = await app_shared_name_search_info(search);
  let a_name = property_get(a, "a_name");
  let f_name = property_get(a, "f_name");
  let combined = function_name_combine(f_name, "run");
  let path = path_join(["temp", combined]);
  let f_name_ext = folder_scripts_join_mjs(path);
  let joined = await webpack_build_generic_source(f_name);
  let r = file_name_js(a_name);
  async function lambda(entry) {
    await file_overwrite(entry, joined);
    let entry_path = folder_current_join(entry);
    let env_vars = {
      [webpack_config_entry_path()]: entry_path,
      [webpack_config_filename()]: r,
      [webpack_config_folder()]: config_folder,
    };
    let config_path = folder_scripts_join_mjs("webpack.config");
    let words = ["webpack", "--config", config_path].concat(words_after);
    let env = object_merge_set(env_vars, process.env);
    let out = await npx_run(words, {
      env,
    });
    let stdout = {
      stdout: out,
    };
    return stdout;
  }
  let result = await file_delete_after(f_name_ext, lambda);
  return result;
}
