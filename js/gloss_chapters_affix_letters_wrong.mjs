import { gloss_chapter_affix_letters_wrong } from "./gloss_chapter_affix_letters_wrong.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
export async function gloss_chapters_affix_letters_wrong(fn, known) {
  "Every chapter of one gloss store holding an explanation that quotes letters for a piece of its word which the dictionary gives no piece of that kind holding.";
  "The dictionary is handed in rather than read here, because reading it is the slow part and one reading serves every chapter. Two hundred chapters each opening it for themselves was the shape that made an earlier sweep take hours.";
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_affix_letters_wrong(
      chapter_code,
      fn,
      known,
    );
    return found;
  }
  let r = await gloss_chapters_offenders_generic(fn, chapter_read);
  return r;
}
