import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_g_tutorial } from "./app_g_tutorial.mjs";
export async function app_g_click_npc_pray(
  player,
  overlay,
  overlay_close,
  div_map,
) {
  let container = app_g_container_text(
    overlay,
    text_combine(
      emoji_pray(),
      " You remember that you have not prayed, yet, before your next conversation!",
    ),
  );
  let conversed = property_get(player, "conversed");
  if (not(conversed)) {
    app_g_p_text(
      container,
      " To pray, tap or click on yourself (You glow with white)",
    );
  }
  async function on_back() {
    await overlay_close();
    let text = emoji_pray();
    let player_property = "conversed";
    let tutorial_property = "tutorial_converse";
    await app_g_tutorial(player_property, div_map, tutorial_property, text);
  }
  app_g_button_back(overlay, on_back);
}
