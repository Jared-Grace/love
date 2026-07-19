import { app_g_button_green } from "./app_g_button_green.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_scripture } from "./app_g_scripture.mjs";
export function app_g_bible_passage_button_direct(reference, verse_text, overlay, lambda) {
  "a Bible passage choice button built from a reference + verse text DIRECTLY (no chapter-code lookup) — for verses that carry their own reference/text (e.g. the how-are-you comfort verses, which span many books). dark bg + light-green reference + glowing gold verse (app_g_scripture); the base that app_g_bible_passage_button delegates to";
  let b = app_g_button_green(overlay, "", lambda);
  html_style_set(b, "background", "rgba(0, 0, 0, 0.8)");
  app_g_scripture(b, reference, verse_text);
  return b;
}
