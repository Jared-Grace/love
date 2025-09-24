import { ebible_verse_download } from "./ebible_verse_download.mjs";
import { browser_is } from "./browser_is.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(bible_folder, chapter_code, verse_number) {
  marker("1");
  let b = browser_is();
  if (false) {
    let verse = await ebible_verse_download(en, chapter_code, verse_number);
  }
  let verses = await ebible_verses(bible_folder, chapter_code);
  let result = list_find_property(verses, "verse_number", verse_number);
  return result;
}
