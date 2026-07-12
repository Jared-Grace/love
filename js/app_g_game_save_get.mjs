import { global_function_property_lambda_async } from "./global_function_property_lambda_async.mjs";
import { file_read_json_curried } from "./file_read_json_curried.mjs";
import { app_g_game_save_path } from "./app_g_game_save_path.mjs";
export async function app_g_game_save_get() {
  let p = app_g_game_save_path();
  let lambda = file_read_json_curried(p);
  let g = await global_function_property_lambda_async(
    app_g_game_save_get,
    p,
    lambda,
  );
  return g;
}
