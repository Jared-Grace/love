import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_glosses_write } from "./app_original_bible_gloss_glosses_write.mjs";
import { each_async } from "./each_async.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_glosses_write_chapter_file } from "./gloss_glosses_write_chapter_file.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_glosses_write_chapter_file(
  chapter_code,
) {
  "Take the new short English written for a whole chapter of the original-language Bible out of the one file it was handed over in, and mend every passage named inside it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a file to read and a store entry to mend, and nothing that runs.";
  "The file is an object whose names are the verses each passage covers, exactly as the store spells them, and whose values are the short English for that passage keyed by a word's standing in it. Nothing but the short English is written back, so the words themselves and the prose beside them are left as they are.";
  "One file rather than one per passage, because an author reads a whole chapter's marked words in one worksheet and answers them in one sitting; fifty files would be fifty writings of the same answer.";
  let path = gloss_glosses_write_chapter_file(
    chapter_code,
    app_original_bible_gloss_generate,
  );
  let passages = await file_read_json(path);
  let verse_keys = object_property_names(passages);
  let mended = [];
  async function verse_key_write(verse_key) {
    let glosses = property_get(passages, verse_key);
    await app_original_bible_gloss_glosses_write(
      chapter_code,
      verse_key,
      glosses,
    );
    list_add(mended, verse_key);
  }
  await each_async(verse_keys, verse_key_write);
  return mended;
}
