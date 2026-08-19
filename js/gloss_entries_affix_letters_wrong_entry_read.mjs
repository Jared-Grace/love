import { property_get } from "./property_get.mjs";
import { gloss_entries_affix_letters_wrong_entry_read_entry_read } from "./gloss_entries_affix_letters_wrong_entry_read_entry_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_entries_affix_letters_wrong_entry_read(word_key, known) {
  arguments_assert(arguments, 2);
  let r2 = gloss_entries_affix_letters_wrong_entry_read_entry_read(
    word_key,
    known,
  );
  let entry_read = property_get(r2, "entry_read");
  let wrong = property_get(r2, "wrong");
  let r = {
    wrong,
    entry_read,
  };
  return r;
}
