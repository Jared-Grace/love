import { ebible_chapter_code_normalize } from "./ebible_chapter_code_normalize.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(language_code, chapter_code, verse_number) {
  marker("1");
  chapter_code = ebible_chapter_code_normalize(chapter_code);
  let languages = ebible_languages();
  let filtered = list_find_property(languages, "language_code", language_code);
  let v = await ebible_verses(bible_folder, chapter_code);
  return v;
}
