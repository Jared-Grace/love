import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function g_sermon_verse_to_text(v, chapter_code, books) {
  let verse_numbers = property_get(v, "verse_numbers");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let text = property_get(v, "text");
  let sermon = property_get(v, "sermon");
  let mapped = app_g_openai_split(sermon);
  let joined = list_join_newline_2(mapped);
  let joined2 = list_join_newline_2([reference, text, joined]);
  return joined2;
}
