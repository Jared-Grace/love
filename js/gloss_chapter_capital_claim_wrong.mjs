import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_capital_claim_wrong } from "./gloss_entries_capital_claim_wrong.mjs";
export async function gloss_chapter_capital_claim_wrong(
  chapter_code,
  fn,
  lambda$capital_claim_is,
) {
  "How many explanations in one authored gloss chapter say the word is written with a capital letter, how many of those sit on a word carrying no capital at all, and which words and wordings those were.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM15, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is gathered before anything is judged, so that the wordings come back once rather than once per passage.";
  function entries_pass(entries) {
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  let found = gloss_entries_capital_claim_wrong(
    entries,
    lambda$capital_claim_is,
  );
  return found;
}
