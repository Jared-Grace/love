import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { gloss_chapter_words_respell } from "./gloss_chapter_words_respell.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_words_respell(fn, words_read) {
  "Give every explanation across one whole gloss store the passage's own spelling of the word it is about, and answer with the chapters whose spellings changed.";
  "The store is read rather than a list of chapters being handed in, so nothing has to be kept in step with what has been authored, and a chapter written after this ran is corrected by running it again.";
  "It answers with only the chapters something changed in, and with every before and after, because a change to what a reader is shown should be readable rather than counted.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_words_respell(chapter_code, fn, words_read);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function changed_is(chapter) {
    let chapter_changed = property_list_empty_not_is(chapter, "changes");
    return chapter_changed;
  }
  let changed = list_filter(chapters, changed_is);
  let r2 = {
    chapters: list_size(chapters),
    changed: list_size(changed),
    spellings: changed,
  };
  return r2;
}
