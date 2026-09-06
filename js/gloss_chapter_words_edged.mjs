import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_words_edged } from "./gloss_entries_words_edged.mjs";
export async function gloss_chapter_words_edged(chapter_code, fn) {
  "Every word in one authored gloss chapter that carries a mark from the sentence around it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  let edged = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    gloss_entries_words_edged,
  );
  return edged;
}
