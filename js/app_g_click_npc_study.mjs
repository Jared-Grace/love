import { app_g_container_text } from "./app_g_container_text.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_g_tutorial_study } from "./app_g_tutorial_study.mjs";
export async function app_g_click_npc_study(
  player,
  overlay,
  overlay_close,
  div_map,
) {
  app_g_container_text(
    overlay,
    text_combine(emoji_book_open(), " You remember that you need to study!"),
  );
  app_g_button_back(overlay, overlay_close);
  let studied = property_get(player, "studied");
  if (not(studied)) {
    await app_g_tutorial_study(div_map);
  }
}
