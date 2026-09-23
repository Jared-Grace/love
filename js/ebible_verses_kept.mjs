import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { ebible_verse_cleaned } from "./ebible_verse_cleaned.mjs";
import { list_map } from "./list_map.mjs";
export async function ebible_verses_kept(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One chapter cut into its verses and tidied, with nothing thrown away: every number the page marks is here, the ones the translation printed no words for included, and whatever stands before the first number is here too under a nought.";
  "IT IS THE CUT THAT THE OTHER READINGS ARE MADE OUT OF. The one that hands verses to a reader drops the wordless ones; the one that draws a chapter to a person keeps them and writes a mark in their place; the one that measures how many wordless verses the archive holds has to see them as they were printed. Three different answers to the same page, so the page is read once and the three disagreements are kept where they belong, in the three readings.";
  "IT IS NOT FOR SHOWING TO ANYBODY. A verse in here may be a bare full stop or a lone bracket, which is the printer saying there is nothing rather than anything a person reads. Drawn as it stands it looks like a fault in the app. Ask one of the readings above instead.";
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let before = property_get(cut, "before");
  let marked = property_get(cut, "verses");
  let verse_number = ebible_verses_before();
  let heading = ebible_verse_new_text(before, verse_number);
  let all = list_copy(marked);
  list_add_first(all, heading);
  function lambda(item) {
    let v = ebible_verse_cleaned(bible_folder, item);
    return v;
  }
  let verses = list_map(all, lambda);
  return verses;
}
