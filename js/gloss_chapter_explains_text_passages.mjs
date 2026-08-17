import { gloss_chapter_passages_counted_generic } from "./gloss_chapter_passages_counted_generic.mjs";
import { gloss_entries_explains_text_count } from "./gloss_entries_explains_text_count.mjs";

export async function gloss_chapter_explains_text_passages(
  chapter_code,
  fn,
  text,
) {
  "Every passage of one authored gloss chapter whose word explanations say a named piece of text, each named by the verses it covers and by how many of its explanations say it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain text";
  "the text is a run of letters to look for. It names words to read and nothing that runs.";
  "Mending a chapter's wording is done a passage at a time, so what is wanted before starting is which passages need mending and how much is in each - a single count for the chapter says how long the work is without saying where any of it is.";
  "Passages saying it nowhere are left out rather than listed at nothing, so what comes back is the work and not the chapter.";
  function entries_read(entries) {
    let count = gloss_entries_explains_text_count(entries, text);
    return count;
  }
  let r = await gloss_chapter_passages_counted_generic(
    chapter_code,
    fn,
    entries_read,
  );
  return r;
}
