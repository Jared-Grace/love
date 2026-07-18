import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_scripture } from "./app_g_scripture.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  "a Bible passage choice: a dark button with a light-green reference + a softly glowing GOLD verse (gold = God's written word, vs green for the player's own words)";
  let verse_numbers = property_get(passage, "verse_numbers");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let verse_text = property_get(passage, "text");
  let b = app_g_button_green(overlay, "", lambda);
  html_style_set(b, "background", "rgba(0, 0, 0, 0.8)");
  app_g_scripture(b, reference, verse_text);
  return b;
}
