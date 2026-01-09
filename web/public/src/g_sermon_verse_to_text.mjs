import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function g_sermon_verse_to_text(v) {
  let verse_numbers = object_property_get(v, "verse_numbers");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers2,
  );
  let result = list_join_comma_space(verse_numbers);
  let text = object_property_get(v, "text");
  let sermon = object_property_get(v, "sermon");
  let mapped = app_g_openai_split(sermon);
  let joined = list_join_newline_2(mapped);
  let joined2 = list_join_newline_2([result, text, joined]);
  return joined2;
}
