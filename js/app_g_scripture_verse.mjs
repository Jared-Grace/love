import { html_style_set } from "./html_style_set.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { app_shared_color_gold_text_light } from "./app_shared_color_gold_text_light.mjs";
export function app_g_scripture_verse(element) {
  "style an element as a Scripture verse: softly glowing LIGHTER-GOLD text (gold = God's word; the lighter shade keeps the verse distinct from God's-leading PROSE, which uses the richer base gold) — the ref-less DRY piece, shared by the passage-button (gospel-share) verse, the prayer-wait verse, and the dove (HS-warning) verse";
  html_style_set(element, "color", app_shared_color_gold_text_light());
  html_bold_mild(element);
  html_style_set(element, "text-shadow", "0 0 0.15em rgba(255, 255, 255, 0.6)");
}
