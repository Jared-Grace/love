import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_explains_repeated_kinds } from "./gloss_entries_explains_repeated_kinds.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapter_explains_repeated_kinds(chapter_code, fn) {
  "How much of one authored chapter stands in a repeated group, split by whether the wording was handed to one word met again or to different words, beside how many explanations the chapter holds in all.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is gathered before anything is grouped, rather than each passage being grouped on its own, because the chapter is what a reader goes down in one sitting - a wording handed to a word in verse 3 and again in verse 27 is a repetition to them whatever the passages say.";
  "How many the chapter holds travels out with the two counts because it is the whole they are shares of, and a share worked out from the offending chapters alone would say every store was entirely repetition.";
  function entries_pass(entries) {
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  let kinds = gloss_entries_explains_repeated_kinds(entries);
  let same = property_get(kinds, "same");
  let across = property_get(kinds, "across");
  let held = list_size(entries);
  let r = {
    same,
    across,
    entries: held,
  };
  return r;
}
