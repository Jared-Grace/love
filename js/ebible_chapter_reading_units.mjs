import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { bible_verses_reading_units } from "./bible_verses_reading_units.mjs";
export async function ebible_chapter_reading_units(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One chapter of one bible read from disk and gathered into the pieces a reader or a singer may stop at.";
  "★ IT IS THE ONE PLACE THAT TURNS A CHAPTER INTO WHAT GETS RECORDED. Everything downstream that cuts audio, fills a screen or sets a line to music wants the same list, and each of them working the verses out again would be three chances to disagree about where a piece ends. Reading and gathering are kept apart so that the gathering can be checked without a disk, and joined here so that nobody has to remember to do both.";
  arguments_assert(arguments, 2);
  let verses = await ebible_verses(bible_folder, chapter_code);
  let units = bible_verses_reading_units(verses);
  return units;
}
