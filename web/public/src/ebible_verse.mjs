import { file_write } from "./file_write.mjs";
import { file_temp } from "./file_temp.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { string_split_colon } from "./string_split_colon.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_chapter_code_normalize } from "./ebible_chapter_code_normalize.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export async function ebible_verse(language_codes, chapter_verse) {
  marker("1");
  let split2 = string_split_colon(chapter_verse);
  let { first, second } = list_first_second(split2);
  let split = string_split_comma(language_codes);
  let languages = ebible_languages();
  async function lambda(language_code) {
    let chapter_code = ebible_chapter_code_normalize(first);
    let l = list_find_property(languages, "language_code", language_code);
    let bible_folder = object_property_get(l, "bible_folder");
    let vs = await ebible_verses(bible_folder, chapter_code);
    let v = list_find_property(vs, "verse_number", second);
    let text = object_property_get(v, "text");
    return text;
  }
  let verse_texts = await list_map_unordered_async(split, lambda);
  let joined = list_join_newline_2(verse_texts);
  async function lambda2(temp_path) {
    await file_write(temp_path, joined);
    fo;
  }
  await file_temp(lambda2);
  return verse_texts;
}
