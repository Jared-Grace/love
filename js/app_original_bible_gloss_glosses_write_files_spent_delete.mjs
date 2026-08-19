import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passage_entries } from "./app_original_bible_gloss_passage_entries.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_write_files_spent_delete_generic } from "./gloss_write_files_spent_delete_generic.mjs";
export async function app_original_bible_gloss_glosses_write_files_spent_delete() {
  "Clear away every piece of waiting short English for the original-language gloss that its passage already carries word for word under the same words, and answer with what was cleared and what is still waiting.";
  "The command that mends a whole chapter finds its work by reading the folder, so a hand-off left lying there is written again every time that chapter is mended - and the short English is exactly what has been rewritten since, where an earlier author left a marker standing in place of a meaning. A spent file lying in the folder is a mended chapter waiting to be quietly unmended.";
  "It names the store, the family of files, the reading that opens a passage, and which half of a word's row is being cleared; the clearing itself is written once and shared with the twin over the prose.";
  let key = gloss_entry_gloss_key();
  let r = await gloss_write_files_spent_delete_generic(
    app_original_bible_gloss_generate,
    "glosses_",
    app_original_bible_gloss_passage_entries,
    key,
  );
  return r;
}
