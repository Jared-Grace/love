import { gloss_write_files_verse_keys_generic } from "./gloss_write_files_verse_keys_generic.mjs";
import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { gloss_entry_gloss_blank_is } from "./gloss_entry_gloss_blank_is.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_write_files_blanks_from_store_generic(
  chapter_code,
  fn,
) {
  "Carry into each hand-off file of one chapter the meanings the store was given for words the file had left blank, and answer with the verses whose files were written.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  "★ WITHOUT THIS THE REPAIR UNDOES THE FILL. A blank is filled in the store alone, so the hand-off file still holds the blank, the stale check names the passage, and the repair - where the file wins - writes the blank back over a meaning that may already have shipped.";
  "A file is written only when filling its blanks from the store makes it the same as the store, entry for entry. Any other difference is a disagreement this cannot judge - which side is behind is a question about the chapter - so that file is left exactly as it is and the stale check goes on naming it.";
  "It finds its own files, so it is safe to run on any chapter at any time: a file with no blanks, or one already in step with the store, is left alone.";
  let verse_keys = await gloss_write_files_verse_keys_generic(
    chapter_code,
    fn,
    "gloss_",
  );
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
  let property_name = gloss_entry_gloss_key();
  let written = [];
  for (let verse_key of verse_keys) {
    let passage = gloss_passages_verses_key_find(passages, verse_key);
    if (null_is(passage)) {
      continue;
    }
    let stored = gloss_passage_entries(passage);
    let path = gloss_write_file_path(chapter_code, verse_key, fn);
    let authored = await file_read_json(path);
    let left2 = list_size(authored);
    let right2 = list_size(stored);
    let same_size = equal(left2, right2);
    if (not(same_size)) {
      continue;
    }
    let mended = [];
    let filled = 0;
    let index = 0;
    for (let entry of authored) {
      let counterpart = list_get(stored, index);
      index = add(index, 1);
      let blank = gloss_entry_gloss_blank_is(entry);
      if (blank) {
        let meaning = property_get(counterpart, property_name);
        entry = object_copy_property_set(entry, property_name, meaning);
        filled = add(filled, 1);
      }
      list_add(mended, entry);
    }
    if (equal(filled, 0)) {
      continue;
    }
    let left = json_format_to(mended);
    let right = json_format_to(stored);
    let same = equal(left, right);
    if (not(same)) {
      continue;
    }
    await file_overwrite_uncached(path, left);
    list_add(written, verse_key);
  }
  let r = {
    chapter_code,
    written,
  };
  return r;
}
