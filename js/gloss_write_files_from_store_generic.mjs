import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_write_files_from_store_generic(
  chapter_code,
  fn,
  verse_keys,
) {
  "Write the store's word explanations over the hand-off files of the given verses of one chapter, and answer with the verses whose files were written.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to write and nothing that runs.";
  "Which verses is asked for rather than worked out here, because whether the store is the right side is a judgment about each verse that only the caller can make. A verse the store does not hold is left alone, because there is nothing to write into its file but an empty list, and that would throw away text that was never stored.";
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
  for (let verse_key of verse_keys) {
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
  return written;
}
