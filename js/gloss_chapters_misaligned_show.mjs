import { gloss_chapters_words_misaligned } from "./gloss_chapters_words_misaligned.mjs";
import { gloss_chapter_misaligned_show } from "./gloss_chapter_misaligned_show.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_chapters_misaligned_show(fn, words_read) {
  "Every passage left in one gloss store that needs explanations written back in, laid out to write them by.";
  "It asks the same reader the gate asks which chapters are at fault, so the set laid out here is exactly the set that is red rather than a list somebody typed out beside it and has to keep matching.";
  let offenders = await gloss_chapters_words_misaligned(fn, words_read);
  let chapter_codes = list_map_property(offenders, "chapter_code");
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_misaligned_show(chapter_code, fn, words_read);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  return chapters;
}
