import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { ebible_parts_to_reference } from "../../../love/public/src/ebible_parts_to_reference.mjs";
import { ebible_chapter_code_parse } from "../../../love/public/src/ebible_chapter_code_parse.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
) {
  marker("1");
  let verse_numbers = object_property_get(passage, "verse_numbers");
  let text2 = object_property_get(passage, "text");
  let { book_code, chapter_name } = ebible_chapter_code_parse(chapter_code);
  const reference = ebible_parts_to_reference(
    books,
    book_code,
    verse_numbers,
    chapter_name,
  );
  const button_text = text2 + " " + reference;
  function lambda3() {}
  app_g_button_green(overlay, button_text, lambda3);
}
