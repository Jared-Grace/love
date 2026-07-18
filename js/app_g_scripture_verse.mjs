import { html_style_set } from "./html_style_set.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
export function app_g_scripture_verse(element) {
  "style an element as a Scripture verse: softly glowing GOLD text (gold = God's word) — the ref-less DRY piece, shared by the passage-button verse and the prayer-wait verse";
  html_style_set(element, "color", app_shared_color_gold_text());
  html_bold_mild(element);
  html_style_set(element, "text-shadow", "0 0 0.2em rgba(255, 255, 255, 0.7)");
}
