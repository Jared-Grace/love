import { list_filter_property } from "./list_filter_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(language_code, chapter_code, verse_number) {
  marker("1");
  let languages = ebible_languages();
  let result = list_filter_property(languages, "language_code", language_code);
  let v = await ebible_verses(bible_folder, chapter_code);
  return v;
}
