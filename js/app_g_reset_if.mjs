import { html_hash_get } from "./html_hash_get.mjs";
import { html_hash_set } from "./html_hash_set.mjs";
import { app_g_game_initialize } from "./app_g_game_initialize.mjs";
export async function app_g_reset_if() {
  let hash = html_hash_get();
  if (hash === "#reset") {
    await app_g_game_initialize();
    html_hash_set("#");
  }
}
