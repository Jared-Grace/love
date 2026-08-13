import { gloss_chapter_entries_edits_apply } from "./gloss_chapter_entries_edits_apply.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapters_entries_edits_apply(path, fn) {
  "Put a whole file of hand-written explanations into the authored gloss chapters they belong to, and answer with what each chapter did.";
  "The file names its chapters and lets each one carry its own list of edits, so one run covers as many chapters as were authored in a sitting and every chapter is read and written exactly once.";
  "$plain path";
  "the path names a file of authored explanations to read. Nothing in it is run.";
  let edits = await file_read_json(path);
  let chapter_codes = object_property_names(edits);
  async function chapter_apply(chapter_code) {
    let one = property_get(edits, chapter_code);
    let done = await gloss_chapter_entries_edits_apply(chapter_code, fn, one);
    return done;
  }
  let chapters = await list_map_async(chapter_codes, chapter_apply);
  return chapters;
}
