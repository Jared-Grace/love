import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_explains_repeated } from "./gloss_entries_explains_repeated.mjs";
export async function gloss_chapter_explains_repeated(chapter_code, fn) {
  "Every explanation in one authored gloss chapter that some other word in the same chapter was given word for word, commonest first, each named beside how many words were handed it.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The chapter is the unit rather than the passage, because the chapter is what a reader reads. Two verses on the same page handed the same sentence about the same little word is exactly the repetition worth finding, and a reading that only ever compared a passage against itself would never see it.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  function entries_pass(entries) {
    "The explanations are wanted whole and unpicked, because what is being asked is how they compare with each other and a passage cannot answer that on its own.";
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  let repeated = gloss_entries_explains_repeated(entries);
  return repeated;
}
