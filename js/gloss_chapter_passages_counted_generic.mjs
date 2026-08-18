import { gloss_chapter_passages_asked_generic } from "./gloss_chapter_passages_asked_generic.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function gloss_chapter_passages_counted_generic(
  chapter_code,
  fn,
  lambda_entries,
) {
  "Every passage of one authored gloss chapter that answers a question about its words at all, each named by the verses it covers and by how many of its words answer it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Mending a chapter is done a passage at a time, so what is wanted before starting is which passages need mending and how much is in each - a single count for the chapter says how long the work is without saying where any of it is.";
  "Passages answering nowhere are left out rather than listed at nothing, so what comes back is the work and not the chapter.";
  "What is asked of each passage is handed in, because the walk down to a passage's words is the same whichever part of a word is being looked at - the prose a reader reads, the short English under the word - and only the question differs. A chapter nobody has authored comes back as no work rather than as an error, so a store read for a question it has no chapters for answers quietly.";
  function passage_count(entries, verses) {
    let count = lambda_entries(entries);
    let some = greater_than(count, 0);
    if (not(some)) {
      let nothing = null;
      return nothing;
    }
    let saying = {
      verses,
      count,
    };
    return saying;
  }
  let r = await gloss_chapter_passages_asked_generic(
    chapter_code,
    fn,
    passage_count,
  );
  return r;
}
