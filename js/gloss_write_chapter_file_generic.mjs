import { each_async } from "./each_async.mjs";
import { error } from "./error.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passage_write } from "./gloss_passage_write.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_write_chapter_file_path } from "./gloss_write_chapter_file_path.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_write_chapter_file_generic(
  chapter_code,
  passages_read,
  fn,
) {
  "Save a whole chapter's authored word explanations into a named gloss store from one JSON file, keyed by the verses each passage covers.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  "The file itself is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  "It is the passage twin done a chapter at a time, and it exists for the same reason the chapter-wide pull does: the whole store is being authored over, and a chapter stored a passage at a time costs an exchange per passage.";
  "A passage named by verses the chapter does not divide itself at is refused by name rather than skipped. The keys are typed by an author, and a mistyped one would otherwise store nothing and report the same success as a stored one - and the passage it was meant for would keep the generated explanations it was written to replace.";
  "A key the file leaves out is left exactly as it stands, so a chapter can be authored over as many sittings as it takes.";
  let path = gloss_write_chapter_file_path(chapter_code, fn);
  let authored = await file_read_json(path);
  let passages = await passages_read(chapter_code);
  let verse_keys = object_property_names(authored);
  async function passage_write(verse_key) {
    let passage = gloss_passages_verses_key_find(passages, verse_key);
    if (not(passage)) {
      let message = text_combine_multiple([
        "no passage of ",
        chapter_code,
        " covers the verses ",
        verse_key,
        " - the chapter is divided at other verses, and the pull that hands the chapter over names every division it has",
      ]);
      error(message);
    }
    let entries = property_get(authored, verse_key);
    await gloss_passage_write(passage, entries, fn);
  }
  await each_async(verse_keys, passage_write);
  let written = list_size(verse_keys);
  let r = {
    chapter_code,
    written,
  };
  return r;
}
