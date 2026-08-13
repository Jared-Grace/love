import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { gloss_passage_entries_splice } from "./gloss_passage_entries_splice.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
export async function gloss_chapter_entries_edits_apply(
  chapter_code,
  fn,
  edits,
) {
  "Put hand-written explanations into one authored gloss chapter, each edit naming the verses it belongs to, and answer with what each one did.";
  "The verses are named the way the chapter itself names them, the verse numbers of a passage joined by commas, so an edit says where it goes in the chapter's own words rather than by counting passages.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  function edit_apply(edit) {
    let verses = property_get(edit, "verses");
    function passage_is(candidate) {
      let joined = property_list_join_comma(candidate, "verse_numbers");
      let same = equal(joined, verses);
      return same;
    }
    let passage = list_find(passages, passage_is);
    let at = property_get(edit, "at");
    let remove = property_get(edit, "remove");
    let written = property_get(edit, "entries");
    let counts = gloss_passage_entries_splice(passage, at, remove, written);
    let done = {
      verses,
      counts,
    };
    return done;
  }
  let applied = list_map(edits, edit_apply);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    applied,
  };
  return r;
}
