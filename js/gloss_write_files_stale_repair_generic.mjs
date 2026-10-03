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
  "The file wins, and that is a choice about this chapter rather than a rule about the two sides. Neither side is the better one by being the side it is. A hand-off file written before the class sweep existed can hold a thinner sentence than the store does, and two chapters measured side by side showed it going both ways: in one the file carried a sentence written for the verse and the store carried a bare class label, and in the other the file carried a back-reference saying only that the word had come before while the store carried the settled wording for the word's class. So read both sides of one chapter before calling this on it. What is read is the explanation itself and not a count, because the two sides differ by wording and a count is equal on both.";
  "A chapter whose files are older than the class sweep must not be handed to this at all, and nothing here can tell that from the inside: a file and a store that disagree look the same whichever of them is behind. The loss is one way only. The store's side can be written again from the class lookup, and a sentence written for the verse that is overwritten by a back-reference cannot be got back.";
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
