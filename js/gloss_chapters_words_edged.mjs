import { gloss_chapter_words_edged } from "./gloss_chapter_words_edged.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
export async function gloss_chapters_words_edged(fn) {
  "Every chapter of one gloss store holding a word that carries a mark from the sentence around it, each named beside the words found in it.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  async function chapter_read(chapter_code) {
    let edged = await gloss_chapter_words_edged(chapter_code, fn);
    return edged;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  return offenders;
}
