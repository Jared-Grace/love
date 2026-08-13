import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_roots_disagreeing } from "./gloss_entries_roots_disagreeing.mjs";
export async function gloss_chapter_roots_disagreeing(chapter_code, fn, known) {
  "Every explanation in one gloss chapter that says nothing about the root an outside dictionary takes its word back to.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  function found_of(entries) {
    let found = gloss_entries_roots_disagreeing(entries, known);
    return found;
  }
  let disagreeing = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    found_of,
  );
  return disagreeing;
}
