import { ebible_chapter_readaloud_lines } from "./ebible_chapter_readaloud_lines.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { ebible_verses_numbers } from "./ebible_verses_numbers.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { browser_is } from "./browser_is.mjs";
export async function ebible_verses_readaloud(bible_folder, chapter_code) {
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  let verse_numbers = await ebible_verses_numbers(bible_folder, chapter_code);
  let verse_number = ebible_verses_before();
  list_remove_if_exists(verse_numbers, verse_number);
  let filtered = await ebible_chapter_readaloud_lines(
    bible_folder,
    chapter_code,
  );
  let list = list_map_pairs(filtered, verse_numbers, ebible_verse_new_text);
  return list;
}
