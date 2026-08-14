import { gloss_chapter_passages_repair_generic } from "./gloss_chapter_passages_repair_generic.mjs";
import { gloss_passage_punctuation_entries_repair } from "./gloss_passage_punctuation_entries_repair.mjs";
export async function gloss_chapter_punctuation_entries_repair(
  chapter_code,
  fn,
) {
  "Drop every explanation in one authored gloss chapter that explains a mark rather than a word, and answer with how many were dropped.";
  "The whole chapter is written back out whether or not anything was dropped, so a chapter that was already clean comes back with nothing removed and a file that reads the same.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let r = await gloss_chapter_passages_repair_generic(
    chapter_code,
    fn,
    gloss_passage_punctuation_entries_repair,
  );
  return r;
}
