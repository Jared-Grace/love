import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verse(bible_folder, chapter_code, verse_number) {
  marker("1");
  let b = browser_is();
  if (b) {
    let value = global_function_initialize(fn, initial);
    let verse = await ebible_verse_download(
      bible_folder,
      chapter_code,
      verse_number,
    );
    return verse;
  }
  let verses = await ebible_verses(bible_folder, chapter_code);
  let result = list_find_property(verses, "verse_number", verse_number);
  return result;
}
