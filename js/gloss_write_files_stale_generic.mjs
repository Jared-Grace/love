import { gloss_write_files_verse_keys_generic } from "./gloss_write_files_verse_keys_generic.mjs";
import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_write_files_stale_generic(chapter_code, fn) {
  "The passages of one chapter whose authored word explanations are sitting in their hand-off file and are not what the store holds, answered as the verses those passages cover.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "A hand-off file is read back and compared rather than trusted to have been stored, because the two can part without anything saying so. The file is written by hand and stored by a separate command, so a file written and never stored looks exactly like one that was; and a sweep that gives a whole class of words one wording at once reads the chapter, changes it, and writes the chapter back, so a passage stored while that sweep was in flight is lost without a word. Either way the store ends up carrying a sentence about the class where a sentence about the verse exists on disk.";
  "The chapter is read out of the store and not out of the Bible. The two are handed about under the same word, and the Bible's own passages carry the verse's wording and no explanations at all - so comparing against those calls every passage unstored, which is the one answer that looks like a finding and says nothing.";
  "The comparison is made on the whole entry rather than on the explanation alone, and on the text each side formats to rather than on the objects, so a difference in spacing is not read as a difference in content.";
  "A chapter the store has never held answers with every file it has, which is right: none of them has been stored.";
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
  let stale = [];
  for (let verse_key of verse_keys) {
    let path = gloss_write_file_path(chapter_code, verse_key, fn);
    let authored = await file_read_json(path);
    let passage = gloss_passages_verses_key_find(passages, verse_key);
    let stored = null_is(passage) ? [] : gloss_passage_entries(passage);
    let left = json_format_to(authored);
    let right = json_format_to(stored);
    let same = equal(left, right);
    if (same) {
      continue;
    }
    list_add(stale, verse_key);
  }
  return stale;
}
