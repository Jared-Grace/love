import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function gloss_chapters_offenders_generic(
  fn,
  lambda_chapter_code,
) {
  "Every chapter of one gloss store the caller's question finds something in, each named beside what was found in it.";
  "Two sweeps over a whole store were the same seven lines apart from the one call in the middle - ask the store what chapters it holds, put the question to every one of them at once, then drop the chapters that answered with nothing. The part that differed was the question and the part that agreed was everything else, which is what this is for.";
  "Chapters that found nothing are dropped rather than listed empty, because a sweep over two hundred chapters is read by a human and a page of empty entries buries the handful that matter.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let found = await lambda_chapter_code(chapter_code);
    let r = {
      chapter_code,
      found,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function found_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "found");
    return offending;
  }
  let offenders = list_filter(chapters, found_is);
  return offenders;
}
