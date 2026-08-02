import { storage_local_key_record_new_generic } from "./storage_local_key_record_new_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_words_found } from "./storage_local_key_words_found.mjs";
import { storage_local_key_words } from "./storage_local_key_words.mjs";
import { storage_local_key_words_path } from "./storage_local_key_words_path.mjs";
export async function storage_local_key_words_record_new() {
  "Records the words that have newly reached a browser storage key, and drops nothing the record already holds.";
  "A word arriving for the first time carries no danger at all - nobody has a setting saved under it yet to lose - so stopping to ask a human about it would spend attention on the one case that cannot be wrong.";
  "A word leaving is the whole reason the record exists, and this cannot clear one even by mistake: it only ever adds. So a word that has gone is still missing afterwards and still fails the gate, and the heavy command stays the only way to say that losing the setting was meant.";
  arguments_assert(arguments, 0);
  let path = storage_local_key_words_path();
  let done = await storage_local_key_record_new_generic(
    storage_local_key_words_found,
    storage_local_key_words,
    path,
  );
  return done;
}
