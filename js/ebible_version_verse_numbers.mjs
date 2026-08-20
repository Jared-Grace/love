import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
export async function ebible_version_verse_numbers(bible_folder) {
  "$plain bible_folder";
  "Every verse number one bible carries, kept under the chapter it belongs to.";
  "Read from the same walk the search index is built from, so a chapter this bible cannot be cut into verses is absent here for the same reason it contributes nothing there.";
  let chapters = await ebible_version_chapters_cache(bible_folder);
  function chapter_code_get(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    return chapter_code;
  }
  function verse_numbers_get(chapter) {
    let verses = property_get(chapter, "verses");
    let property_name = verse_number_key();
    let numbers = list_map_property(verses, property_name);
    return numbers;
  }
  let dictionary = list_to_dictionary(
    chapters,
    chapter_code_get,
    verse_numbers_get,
  );
  return dictionary;
}
