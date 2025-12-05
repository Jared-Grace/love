import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_passage_to_reference(passage, chapter_code, books) {
  let verse_numbers = object_property_get(passage, "verse_numbers");
  let text2 = object_property_get(passage, "text");
  const reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  const text = reference + " " + text2;
  return text;
}
