import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_explains_repeated } from "./gloss_entries_explains_repeated.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapter_explains_repeated(chapter_code, fn) {
  "Every explanation in one authored gloss chapter that some other word in the same chapter was given word for word, commonest first, each named beside how many words were handed it - and how many explanations the chapter holds in all.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The chapter is the unit rather than the passage, because the chapter is what a reader reads. Two verses on the same page handed the same sentence about the same little word is exactly the repetition worth finding, and a reading that only ever compared a passage against itself would never see it.";
  "How many the chapter holds in all travels out beside what was found, because the whole is the one number a caller cannot work out for itself afterwards and cannot do without: a hundred repeated words is most of a short chapter and a corner of a long one, and the ratchet over this is on the share rather than the count.";
  "A chapter nobody has authored yet answers with nothing out of nothing, so a sweep crosses the gaps without being told where they are.";
  function entries_pass(entries) {
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  let repeated = gloss_entries_explains_repeated(entries);
  let r = {
    repeated,
    entries: list_size(entries),
  };
  return r;
}
