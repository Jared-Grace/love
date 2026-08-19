import { gloss_entries_affix_letters_wrong_entry_read_entry_read } from "./gloss_entries_affix_letters_wrong_entry_read_entry_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
export function gloss_entries_affix_letters_wrong_entry_read(word_key, known) {
  arguments_assert(arguments, 2);
  let explain_key = gloss_entry_explain_key();
  let wrong = [];
  let entry_read = gloss_entries_affix_letters_wrong_entry_read_entry_read(
    word_key,
    known,
    explain_key,
    wrong,
  );
  let r = {
    wrong,
    entry_read,
  };
  return r;
}
