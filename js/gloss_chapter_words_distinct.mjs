import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { list_unique } from "./list_unique.mjs";
export async function gloss_chapter_words_distinct(chapter_code, fn) {
  "Every different word one authored gloss chapter explains, each counted once however often it is explained.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with no words rather than refusing, so a sweep over a whole store crosses the gaps without being told where they are.";
  let words = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    gloss_entries_words_bare,
  );
  let distinct = list_unique(words);
  return distinct;
}
