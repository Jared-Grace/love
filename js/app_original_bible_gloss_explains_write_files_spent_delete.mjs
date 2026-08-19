import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passage_entries } from "./app_original_bible_gloss_passage_entries.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_write_files_spent_delete_generic } from "./gloss_write_files_spent_delete_generic.mjs";
export async function app_original_bible_gloss_explains_write_files_spent_delete() {
  "Clear away every piece of waiting wording for the original-language gloss that its passage already says word for word, and answer with what was cleared and what is still waiting.";
  "It names the store, the family of files, the reading that opens a passage, and which half of a word's row is being cleared; the clearing itself is written once and shared with the twin over the short English.";
  let r = await gloss_write_files_spent_delete_generic(
    app_original_bible_gloss_generate,
    "explains_",
    app_original_bible_gloss_passage_entries,
    gloss_entry_explain_key(),
  );
  return r;
}
