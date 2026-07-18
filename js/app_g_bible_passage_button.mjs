import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_shared_color_light_green } from "./app_shared_color_light_green.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  "a Bible passage choice: a dark button showing the reference (light) + the verse text (GOLD = God's written word, vs green for the player's own words)";
  let verse_numbers = property_get(passage, "verse_numbers");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let verse_text = property_get(passage, "text");
  let b = app_g_button_green(overlay, "", lambda);
  html_style_set(b, "background", "rgba(0, 0, 0, 0.75)");
  let reference_span = html_span_text(b, reference);
  html_style_set(reference_span, "color", app_shared_color_light_green());
  html_span_space(b);
  let verse_span = html_span_text(b, verse_text);
  html_style_set(verse_span, "color", "#ffe680");
  html_bold_mild(verse_span);
  return b;
}
