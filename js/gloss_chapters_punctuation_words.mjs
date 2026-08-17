import { gloss_chapter_punctuation_words } from "./gloss_chapter_punctuation_words.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
export async function gloss_chapters_punctuation_words(fn) {
  "Every chapter of one gloss store holding a mark that was explained as though it were a word, each named beside the marks found in it.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  async function chapter_read(chapter_code) {
    let marks = await gloss_chapter_punctuation_words(chapter_code, fn);
    return marks;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  return offenders;
}
