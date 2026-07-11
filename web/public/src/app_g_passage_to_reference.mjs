import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_g_passage_to_reference(passage, chapter_code, books) {
  let verse_numbers = property_get(passage, "verse_numbers");
  let text2 = property_get(passage, "text");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let text = text_combine_multiple([reference, " ", text2]);
  return text;
}
