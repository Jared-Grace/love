import { list_filter_property } from "./list_filter_property.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(
  bible_folder,
  book_code,
  chapter_code,
  verse_number,
) {
  marker("1");
  let verses = await ebible_verses(bible_folder, chapter_code);
  let result = list_filter_property(verses, "verse_number", verse_number);
  return;
}
