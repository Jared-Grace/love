import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { gloss_entries_explains_repeated_groups } from "./gloss_entries_explains_repeated_groups.mjs";
export async function gloss_chapter_explains_repeated_groups(chapter_code, fn) {
  "Every explanation in one authored chapter that another word in the same chapter was given word for word, each carried beside the words handed it.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is gathered before anything is grouped, rather than each passage being grouped on its own, because the chapter is what a reader goes down in one sitting - a wording handed to a word in verse 3 and again in verse 27 is a repetition to them whatever the passages say.";
  let entries = await gloss_chapter_entries(chapter_code, fn);
  let groups = gloss_entries_explains_repeated_groups(entries);
  return groups;
}
