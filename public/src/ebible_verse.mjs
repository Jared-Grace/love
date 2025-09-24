import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(language_codes, book_code, chapter_verse) {
  marker("1");
  let verses = await ebible_verses(bible_folder, chapter_code);
  return;
}
