import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { catch_null_async } from "../../../love/public/src/catch_null_async.mjs";
export async function app_g_game_save_get_or_refresh(context) {
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g_main(context);
  }
  return g;
}
