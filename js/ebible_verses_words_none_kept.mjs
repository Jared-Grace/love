import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { ebible_verse_cleaned } from "./ebible_verse_cleaned.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { bible_verse_words_none_token } from "./bible_verse_words_none_token.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_first } from "./list_add_first.mjs";
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
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let before = property_get(cut, "before");
  let marked = property_get(cut, "verses");
  let verse_number = ebible_verses_before();
  let heading_cut = ebible_verse_new_text(before, verse_number);
  let heading = ebible_verse_cleaned(bible_folder, heading_cut);
  function lambda(item) {
    let v = ebible_verse_cleaned(bible_folder, item);
    let words = ebible_verse_words_is(v);
    if (words) {
      return v;
    }
    let token = bible_verse_words_none_token();
    let number = property_get(v, "verse_number");
    let stood_in = ebible_verse_new_text(token, number);
    return stood_in;
  }
  let verses = list_map(marked, lambda);
  let heading_words = ebible_verse_words_is(heading);
  if (heading_words) {
    list_add_first(verses, heading);
  }
  return verses;
}
