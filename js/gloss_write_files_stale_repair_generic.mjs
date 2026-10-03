import { gloss_write_files_stale_generic } from "./gloss_write_files_stale_generic.mjs";
import { gloss_write_file_generic } from "./gloss_write_file_generic.mjs";
export async function gloss_write_files_stale_repair_generic(
  chapter_code,
  passages_read,
  fn,
) {
  "Store every passage of one chapter whose authored word explanations are in their hand-off file and not in the store, and answer with what was stored and what is still unstored afterwards.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  "It takes no list from the caller and finds its own, so it cannot be told to write a passage that did not need it, and it cannot drift from what is actually unstored. Then it asks again, so the answer carries the proof: anything left in the second list is a passage this did not mend, and the one thing that puts a passage there is a file and a store that disagree for a reason other than the store being behind.";
  "The file is the author's and wins. What the store holds where the two differ is a sentence handed to a whole class of words at once, and the wording that class sweep writes is better than a bare class label and worse than a sentence written for the verse the word stands in - so the sentence on disk is the one that should be showing. Nothing is lost by writing it: the store's side is reproducible from the class lookup and the author's side is not.";
  let before = await gloss_write_files_stale_generic(chapter_code, fn);
  for (let verse_key of before) {
    await gloss_write_file_generic(chapter_code, verse_key, passages_read, fn);
  }
  let after = await gloss_write_files_stale_generic(chapter_code, fn);
  let r = {
    chapter_code,
    written: before,
    remaining: after,
  };
  return r;
}
