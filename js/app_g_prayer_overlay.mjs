import { app_g_overlay_cover_emoji_card } from "./app_g_overlay_cover_emoji_card.mjs";
import { property_get } from "./property_get.mjs";
import { html_reflow_opacity_full } from "./html_reflow_opacity_full.mjs";
import { app_g_overlay_verse_add } from "./app_g_overlay_verse_add.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { g_verse_waiting_next } from "./g_verse_waiting_next.mjs";
import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
export function app_g_prayer_overlay() {
  ("full-screen prayer-wait overlay: dims the world, floats a glowing praying emoji above a dark card holding 'Waiting on the Lord...' and a verse; fades in; caller removes it when the prayer is answered. font sizes from ",
    app_g_overlay_fonts.name,
    " (shared with the dove)");
  let fonts = app_g_overlay_fonts();
  let text = emoji_pray();
  let cover = app_g_overlay_cover_emoji_card("rgba(0, 0, 0, 0.82)", text);
  let div = property_get(cover, "div");
  let card = property_get(cover, "card");
  let waiting_text = html_p_text(card, "Waiting on the Lord...");
  html_style_assign(waiting_text, {
    color: "white",
    "font-size": fonts.statement,
    margin: "0",
    "text-align": "center",
  });
  let drawn = g_verse_waiting_next();
  app_g_overlay_verse_add(card, drawn);
  html_reflow_opacity_full(div);
  return div;
}
