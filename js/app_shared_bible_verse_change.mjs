import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_verse_open } from "./app_shared_bible_verse_open.mjs";
export async function app_shared_bible_verse_change(
  context,
  chapter_code,
  verse_current,
  verse_get,
  chapter_change,
) {
  let e = ebible_folder_english();
  let verses = await ebible_verses_browser(e, chapter_code);
  ("the verse being read is looked for again by its number rather than as the very one handed in. the list it came from and the list read here can be two different readings of the same chapter - the words when the internet was there, the numbers alone from a saved index once it went - and looked for as the same object, the verse was not found, and the arrow to the next verse jumped to the next chapter instead.");
  let key = verse_number_key();
  let verse_number_current = property_get(verse_current, key);
  let current = list_find_property(verses, key, verse_number_current);
  let next = verse_get(verses, current);
  let ni = null_is(next);
  if (ni) {
    await chapter_change(context, chapter_code);
  } else {
    let property_name = verse_number_key();
    let verse_number = property_get(next, property_name);
    await app_shared_bible_verse_open(context, verse_number);
  }
}
