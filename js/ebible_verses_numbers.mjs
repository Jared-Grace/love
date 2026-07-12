import { list_map_property } from "./list_map_property.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
export async function ebible_verses_numbers(bible_folder, chapter_code) {
  let verses = await ebible_verses(bible_folder, chapter_code);
  let verse_numbers = list_map_property(verses, "verse_number");
  return verse_numbers;
}
