import { verse_number_key } from "./verse_number_key.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
export async function ebible_verse(bible_folder, chapter_code, verse_number) {
  let verses = await ebible_verses(bible_folder, chapter_code);
  let result = list_find_property(verses, verse_number_key(), verse_number);
  return result;
}
