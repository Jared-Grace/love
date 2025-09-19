import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_chapter_code_normalize } from "./ebible_chapter_code_normalize.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(language_codes, chapter_code, verse_number) {
  marker("1");
  async function lambda(language_code) {
    chapter_code = ebible_chapter_code_normalize(chapter_code);
    let languages = ebible_languages();
    let l = list_find_property(languages, "language_code", language_code);
    let bible_folder = object_property_get(l, "bible_folder");
    let vs = await ebible_verses(bible_folder, chapter_code);
    let v = list_find_property(vs, "verse_number", verse_number);
    return v;
  }
  let waited = await list_map_unordered_async(language_codes, lambda);
  return waited;
}
