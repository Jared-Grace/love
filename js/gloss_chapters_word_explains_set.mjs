import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { gloss_chapter_word_explains_set } from "./gloss_chapter_word_explains_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_word_explains_set(
  fn,
  explains,
  lambda$explain,
) {
  "Give every explanation in one whole gloss store that is about a named word, and that the caller is willing to write over, the wording written for that word - answering with the chapters it rewrote.";
  "The chapters it left alone are counted rather than listed, because a store runs to hundreds of them and a reader wanting to check the work wants the handful that moved.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_set(chapter_code) {
    let changed = await gloss_chapter_word_explains_set(
      chapter_code,
      fn,
      explains,
      lambda$explain,
    );
    let r = {
      chapter_code,
      changed,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_set);
  function changed_is(chapter) {
    let moved = property_list_empty_not_is(chapter, "changed");
    return moved;
  }
  let rewritten = list_filter(chapters, changed_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    rewritten,
  };
  return r2;
}
