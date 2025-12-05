import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  marker("1");
  let verse_numbers = object_property_get(passage, "verse_numbers");
  let text2 = object_property_get(passage, "text");
  const reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  const button_text = reference + " " + text2;
  let b = app_g_button_green(overlay, button_text, lambda);
  return b;
}
