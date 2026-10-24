import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_prose_remove_text } from "./function_prose_remove_text.mjs";
import { function_prose_replace } from "./function_prose_replace.mjs";
export async function bible_glyph_chapters_note_edits_apply() {
  arguments_assert(arguments, 0);
  ("Applies every chapter note edit a reader has decided, from data/bible_glyph_note_edits.json, each as its own commit and in the order filed. An edit with no text after takes the whole line holding the text before out; any other changes that run of text to the text after.");
  ("THE EDITS ARE DATA, NOT CODE, because each is a judgment about what one note now truly says, made by someone who read the note and the chapter, and the next reader should be able to see it and correct it.");
  ("An edit that no longer fits its note stops the run and says which, so once a batch has landed the file is emptied for the next one rather than run again.");
  await ai_git_noted();
  let edits = await file_read_json("data/bible_glyph_note_edits.json");
  let removed = 0;
  let changed = 0;
  for (let edit of edits) {
    let lower = text_lower_to(edit.chapter_code);
    let name = text_combine("bible_glyph_chapter_", lower);
    if (equal(edit.after, null)) {
      await function_call_commit(function_prose_remove_text, [
        name,
        edit.before,
      ]);
      removed = removed + 1;
      continue;
    }
    await function_call_commit(function_prose_replace, [
      name,
      edit.before,
      edit.after,
    ]);
    changed = changed + 1;
  }
  let r = {
    removed,
    changed,
  };
  return r;
}
