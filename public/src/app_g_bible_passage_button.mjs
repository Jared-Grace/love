import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_g_passage_to_reference } from "../../../love/public/src/app_g_passage_to_reference.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  marker("1");
  const button_text = app_g_passage_to_reference(passage, chapter_code, books);
  let b = app_g_button_green(overlay, button_text, lambda);
  html_style_set(b2, "font-weight", "bold");
  return b;
}
