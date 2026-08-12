import { ebible_chapter_verse_markers } from "./ebible_chapter_verse_markers.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_chapter_readaloud_lines } from "./ebible_chapter_readaloud_lines.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { browser_is } from "./browser_is.mjs";
export async function ebible_verses_readaloud(bible_folder, chapter_code) {
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  ("The numbers are taken from the marks the source page puts at the start of each verse, rather than from cutting the chapter into verses and asking what survived. Both readings begin at the same page and one of them is exact: the marks are written down, while the cutting hunts for each number as a word among the words and can take a number belonging to the text for the mark of a verse.");
  ("Cebuano 2 Kings 25 is where that showed. Verse 17 opens on the words eighteen cubits, so the cutting took that eighteen for the start of verse 18, left 17 with nothing in it, and dropped it as a verse the translation has no words for. Twenty-nine numbers were then laid against thirty lines and the reading fell off the end - the whole bible lost its index over one verse that begins with a number.");
  ("The two counts were measured against each other across every chapter of three bibles - three and a half thousand chapters - and they agreed in all of them. So a line read aloud is a verse, and what reading aloud lacks is only the number, which the page has.");
  let markers = await ebible_chapter_verse_markers(bible_folder, chapter_code);
  let property_name = "number";
  let verse_numbers = list_map_property(markers, property_name);
  let filtered = await ebible_chapter_readaloud_lines(
    bible_folder,
    chapter_code,
  );
  let list = list_map_pairs(filtered, verse_numbers, ebible_verse_new_text);
  return list;
}
