import { app_g_main } from "./app_g_main.mjs";
import { null_is } from "./null_is.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_g_game_save_get_or_refresh(context) {
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
    await app_g_main(context);
  }
  return g;
}
