import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_glosses_write_file } from "./app_original_bible_gloss_glosses_write_file.mjs";
import { each_async } from "./each_async.mjs";
import { gloss_write_files_verse_keys_generic } from "./gloss_write_files_verse_keys_generic.mjs";
import { list_add } from "./list_add.mjs";
export async function app_original_bible_gloss_glosses_write_chapter(
  chapter_code,
) {
  "Write into one chapter of the original-language gloss every piece of new short English waiting for it, a passage at a time, and answer with the passages mended.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Mending a chapter of fifty passages one command at a time leaves nothing behind that says what was done, and no single command to say it with - so the record of the work becomes a sentence somebody wrote, which is the one thing that must not go there. Asking the folder what is waiting makes the whole chapter one named command with one real argument.";
  "It finds its own work, so a sitting that mends six passages and a sitting that mends the remaining thirty-nine are the same command, and running it again after everything is written changes nothing.";
  let fn = app_original_bible_gloss_generate;
  let opening = "glosses_";
  let verse_keys = await gloss_write_files_verse_keys_generic(
    chapter_code,
    fn,
    opening,
  );
  let mended = [];
  async function verse_key_write(verse_key) {
    await app_original_bible_gloss_glosses_write_file(chapter_code, verse_key);
    list_add(mended, verse_key);
  }
  await each_async(verse_keys, verse_key_write);
  return mended;
}
