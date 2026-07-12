import { app_g } from "../../love/js/app_g.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { app_g_game_save_get } from "../../love/js/app_g_game_save_get.mjs";
import { catch_null_async } from "../../love/js/catch_null_async.mjs";
export async function app_g_game_save_get_or_refresh(context) {
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g(context);
  }
  return g;
}
