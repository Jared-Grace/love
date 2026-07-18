import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
import { app_g_reveal } from "./app_g_reveal.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_reveal_scripture(correct) {
  "reveal a discerned Bible passage like the discerned opener: the button becomes the gold SURFACE (inscribed Word) — the verse goes dark on gold, the reference stays GREEN (a citation, NOT the Word — kept out of gold) but darker to read — then glow + raise";
  app_shared_scripture_gold(correct);
  html_style_set(property_get(correct, "verse_span"), "color", "#4a3a00");
  html_style_set(property_get(correct, "reference_span"), "color", "darkgreen");
  app_g_reveal(correct);
}
