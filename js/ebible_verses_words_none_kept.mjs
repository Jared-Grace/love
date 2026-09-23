import { equal } from "./equal.mjs";
import { ebible_verses_kept } from "./ebible_verses_kept.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_words_none_token } from "./bible_verse_words_none_token.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_verses_words_none_kept(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One chapter cut into its verses the same way the reading beside this one cuts it, except that a verse the translation printed no words for is kept, under its own number, carrying the mark that says so instead of the printer's scratch it was printed with.";
  "IT IS FOR DRAWING A VERSE TO A PERSON AND FOR NOTHING ELSE. A reader looking at a numbered verse wants to know that this bible had nothing here, because the number is how they would look it up and a number that simply stops existing is indistinguishable from an app that is broken.";
  "★ THIS IS WHY IT IS NOT THE OTHER READING WITH ONE LINE CHANGED. Fourteen readings ask that one for a chapter's verses, and they are not all drawing to a person. One hands its verses straight to the voice that speaks a chapter aloud, which would read the mark out as though it were scripture and would lose the one-piece-per-verse count its manifest checks alignment by; another gathers every different word a whole bible is written with, and would take the mark's own words into that bible's vocabulary. A mark meant for eyes must not be put where a voice and a word count will find it, so the two readings are two functions rather than one with a flag.";
  "THE HEADING IS NEVER MARKED, ONLY DROPPED. Whatever stands before the first verse number is kept under a nought, and most chapters have nothing standing there at all. Marking that the way a verse is marked would write a verse nought onto nearly every chapter in the archive, saying the bible has no words for a verse that was never in it.";
  let all = await ebible_verses_kept(bible_folder, chapter_code);
  let nought = ebible_verses_before();
  function lambda(v) {
    let words = ebible_verse_words_is(v);
    if (words) {
      return v;
    }
    let number = property_get(v, "verse_number");
    let heading_is = equal(number, nought);
    if (heading_is) {
      return null;
    }
    let token = bible_verse_words_none_token();
    let stood_in = ebible_verse_new_text(token, number);
    return stood_in;
  }
  let verses = list_map_filter(all, lambda, null_not_is);
  return verses;
}
