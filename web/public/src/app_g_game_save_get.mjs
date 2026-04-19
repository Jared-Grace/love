import { file_read_json_curried } from "../../../love/public/src/file_read_json_curried.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { global_function_property_lambda_info_async } from "../../../love/public/src/global_function_property_lambda_info_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  let lambda2 = file_read_json_curried(file_path);
  let r = await global_function_property_lambda_info_async(
    app_g_game_save_get,
    p,
    lambda2,
  );
  let exists = property_get(r, "exists");
  let json = await file_read(p);
  let g = json_from(json);
  return g;
}
