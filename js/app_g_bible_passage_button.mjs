import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
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
  let reference_span = html_span_text(b, reference);
  html_style_set(reference_span, "color", "#a0eaa0");
  let separator = html_span_text(b, "📖");
  html_style_set(separator, "margin", "0 0.6em");
  html_style_set(separator, "filter", "sepia(1) saturate(4) brightness(1.1) hue-rotate(5deg)");
  let verse_span = html_span_text(b, verse_text);
  html_style_set(verse_span, "color", "#ffe680");
  html_bold_mild(verse_span);
  html_style_set(verse_span, "text-shadow", "0 0 0.2em rgba(255, 255, 255, 0.7)");
  return b;
}
