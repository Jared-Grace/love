import { gloss_write_files_stale_generic } from "./gloss_write_files_stale_generic.mjs";
import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_write_files_stale_from_store_generic(
  chapter_code,
  fn,
) {
  "Write the store's word explanations over every hand-off file of one chapter that disagrees with the store, and answer with what was written and what still disagrees afterwards.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  "★ THE STORE WINS, AND THAT IS A CHOICE ABOUT THIS CHAPTER. It is the stale repair turned round: there the file wins, here the store does. Which side is behind cannot be told from the inside, so call this only on a chapter whose store has been read and judged the right side - for example one whose stored counts of how often a word has come before were corrected by a gate while the files kept the old ones. Afterwards the repair has nothing left to write back over the store.";
  "A passage the store does not hold is left alone, because there is nothing to write into its file but an empty list, and that would throw away text that was never stored.";
  let before = await gloss_write_files_stale_generic(chapter_code, fn);
  function passage_keep(passage) {
    let kept = [passage];
    return kept;
  }
  let read = await gloss_chapter_passages_collect_generic(
    chapter_code,
    fn,
    passage_keep,
  );
  let passages = property_get(read, "collected");
  let written = [];
  for (let verse_key of before) {
    let passage = gloss_passages_verses_key_find(passages, verse_key);
    if (null_is(passage)) {
      continue;
    }
    let stored = gloss_passage_entries(passage);
    let path = gloss_write_file_path(chapter_code, verse_key, fn);
    let contents = json_format_to(stored);
    await file_overwrite_uncached(path, contents);
    list_add(written, verse_key);
  }
  let after = await gloss_write_files_stale_generic(chapter_code, fn);
  let r = {
    chapter_code,
    written,
    remaining: after,
  };
  return r;
}
