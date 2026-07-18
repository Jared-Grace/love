import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
import { app_g_reveal } from "./app_g_reveal.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_reveal_scripture(correct) {
  "reveal a discerned Bible passage like the discerned opener: the button becomes the gold SURFACE (inscribed Word) — the verse itself stays GOLD (a rich, readable gold on the soft-gold surface, since gold = God's word), the reference stays GREEN (a citation, NOT the Word — kept out of gold) — then glow + raise";
  app_shared_scripture_gold(correct);
  html_style_set(property_get(correct, "verse_span"), "color", "#8a6508");
  html_style_set(property_get(correct, "verse_span"), "text-shadow", "0 0 0.15em rgba(0, 0, 0, 0.4)");
  html_style_set(property_get(correct, "reference_span"), "color", "forestgreen");
  app_g_reveal(correct);
}
