import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_passages_entried_generic(
  fn,
  passage_read,
) {
  "A walk over one authored gloss store that hands over every passage somebody has explained something in, one at a time, with the chapter it stands in and its explanations already opened.";
  "★ A PASSAGE WITH NOTHING EXPLAINED IN IT IS PASSED OVER BEFORE ANYTHING IS COUNTED, AND SO IS NOT COUNTED AS SEEN. Every reading built on this compares what a passage's explanations say against what the passage has, and a passage nobody has written in has no disagreement to have. Counting it would put the store's untouched half into the denominator of every proportion taken from here, which is a different and much easier number than the one anybody is asking for.";
  "How many passages were handed over comes back beside how many chapters were opened, because a reading that gathered nothing cannot otherwise tell a store that agrees with itself from a store nobody has authored.";
  "The chapters are read off the disk afresh on every ask and nothing is written. What each reading then does with a passage is the whole of what one of them differs from another by.";
  "Neither parameter names ordinary data. The first names the gloss the store belongs to, and the second is called once for every explained passage, with the chapter's code, the passage, and its explanations.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let passages_seen = 0;
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_entried_read(passage) {
      let entries = gloss_passage_entries(passage);
      let empty = list_empty_is(entries);
      if (empty) {
        return;
      }
      passages_seen = add(passages_seen, 1);
      passage_read(chapter_code, passage, entries);
    }
    each(passages, passage_entried_read);
  }
  await each_async(chapter_codes, chapter_read);
  let walked = {
    chapters: list_size(chapter_codes),
    passages: passages_seen,
  };
  return walked;
}
