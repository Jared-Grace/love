import { html_bold_mild } from "./html_bold_mild.mjs";
import { app_g_passage_to_reference } from "./app_g_passage_to_reference.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  "a Bible passage choice: the standard button shape restyled as the written-Word gold SURFACE (gold = God's word, vs green for the player's own words), showing the reference + verse text";
  let button_text = app_g_passage_to_reference(passage, chapter_code, books);
  let b = app_g_button_green(overlay, button_text, lambda);
  app_shared_scripture_gold(b);
  html_bold_mild(b);
  return b;
}
