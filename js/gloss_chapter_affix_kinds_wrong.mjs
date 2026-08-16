import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_affix_kinds_wrong } from "./gloss_entries_affix_kinds_wrong.mjs";
export async function gloss_chapter_affix_kinds_wrong(chapter_code, fn, known) {
  "Every explanation in one gloss chapter that calls a piece of its word by a name the dictionary gives no piece of.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  function found_of(entries) {
    let found = gloss_entries_affix_kinds_wrong(entries, known);
    return found;
  }
  let wrong = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    found_of,
  );
  return wrong;
}
