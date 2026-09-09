import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { gloss_entries_pointers_dangling } from "./gloss_entries_pointers_dangling.mjs";
export async function gloss_chapter_pointers_dangling(
  chapter_code,
  fn,
  lambda$pointer_is,
) {
  "How many explanations in one authored chapter point the reader back at a word met earlier, how many of those point at nothing, and which words those were.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is gathered before anything is judged, rather than each passage being judged on its own, because the chapter is what a reader goes down in one sitting - a word explained in verse three and pointed back at in verse twenty-seven was met, whatever the passages say. Asking passage by passage would name that a pointer at nothing.";
  let entries = await gloss_chapter_entries(chapter_code, fn);
  let found = gloss_entries_pointers_dangling(entries, lambda$pointer_is);
  return found;
}
