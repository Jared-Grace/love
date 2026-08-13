import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_back_references } from "./gloss_entries_back_references.mjs";
export async function gloss_chapter_back_references(chapter_code, fn) {
  "Every explanation in one authored gloss chapter that points the reader further up instead of saying the thing itself.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  let pointing = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    gloss_entries_back_references,
  );
  return pointing;
}
