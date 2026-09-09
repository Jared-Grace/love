import { gloss_chapter_known_read } from "./gloss_chapter_known_read.mjs";
import { gloss_passage_misaligned_show } from "./gloss_passage_misaligned_show.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_misaligned_show(
  chapter_code,
  fn,
  words_read,
) {
  "Every passage of one authored gloss chapter that needs explanations written back in, laid out to write them by.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let chapter = await gloss_chapter_known_read(chapter_code, fn);
  let passages = property_get(chapter, "passages");
  function passage_read(passage) {
    let r = gloss_passage_misaligned_show(passage, words_read);
    return r;
  }
  let shown = list_map_filter_null_not_is(passages, passage_read);
  let r2 = {
    chapter_code,
    shown,
  };
  return r2;
}
