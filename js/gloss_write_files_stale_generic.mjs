import { gloss_write_files_verse_keys_generic } from "./gloss_write_files_verse_keys_generic.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_write_files_stale_generic(
  chapter_code,
  passages_read,
  fn,
) {
  "The passages of one chapter whose authored word explanations are still sitting in their hand-off file and are not what the store holds, answered as the verses those passages cover.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "A hand-off file is read back and compared rather than trusted to have been stored, because the two can part without anything saying so. The file is written by hand and stored by a separate command, so a file written and never stored looks exactly like one that was; and a sweep that gives a whole class of words one wording at once reads the chapter, changes it, and writes the chapter back, so a passage stored while that sweep was in flight is lost without a word. Either way the store ends up carrying a sentence about the class where a sentence about the verse exists on disk.";
  "The comparison is made on the whole entry rather than on the explanation alone, and on the text each side formats to rather than on the objects, so a difference in spacing is not read as a difference in content.";
  "A verse whose file names a passage the chapter no longer has is passed over rather than reported. The divisions can be re-cut under a file, and a file left pointing at nothing is a question about the divisions and not about this chapter's store.";
  let verse_keys = await gloss_write_files_verse_keys_generic(
    chapter_code,
    fn,
    "gloss_",
  );
  let passages = await passages_read(chapter_code);
  let stale = [];
  for (let verse_key of verse_keys) {
    let path = gloss_write_file_path(chapter_code, verse_key, fn);
    let authored = await file_read_json(path);
    let passage = gloss_passages_verses_key_find(passages, verse_key);
    if (null_is(passage)) {
      continue;
    }
    let stored = gloss_passage_entries(passage);
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
