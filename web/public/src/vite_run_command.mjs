import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run_command(lib_entry) {
  let path = vite_config_path();
  let command = text_combine_multiple([
    "set LIB_ENTRY=public/src/app_index_main.mjs && set LIB_NAME=AppIndex && vite build --config ",
    path,
  ]);
  await file_exists_assert(path);
  return command;
}
