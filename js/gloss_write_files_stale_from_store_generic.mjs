import { gloss_write_files_stale_generic } from "./gloss_write_files_stale_generic.mjs";
import { gloss_write_files_from_store_generic } from "./gloss_write_files_from_store_generic.mjs";
export async function gloss_write_files_stale_from_store_generic(
  chapter_code,
  fn,
) {
  "Write the store's word explanations over every hand-off file of one chapter that disagrees with the store, and answer with what was written and what still disagrees afterwards.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  "★ THE STORE WINS, AND THAT IS A CHOICE ABOUT THIS CHAPTER. It is the stale repair turned round: there the file wins, here the store does. Which side is behind cannot be told from the inside, so call this only on a chapter whose store has been read and judged the right side - for example one whose stored counts of how often a word has come before were corrected by a gate while the files kept the old ones. Afterwards the repair has nothing left to write back over the store.";
  let before = await gloss_write_files_stale_generic(chapter_code, fn);
  let written = await gloss_write_files_from_store_generic(
    chapter_code,
    fn,
    before,
  );
  let after = await gloss_write_files_stale_generic(chapter_code, fn);
  let r = {
    chapter_code,
    written,
    remaining: after,
  };
  return r;
}
