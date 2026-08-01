import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_words_found } from "./storage_local_key_words_found.mjs";
import { storage_local_key_words } from "./storage_local_key_words.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { storage_local_key_words_path } from "./storage_local_key_words_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function storage_local_key_words_record_new() {
  "Records the words that have newly reached a browser storage key, and drops nothing the record already holds.";
  "A word arriving for the first time carries no danger at all - nobody has a setting saved under it yet to lose - so stopping to ask a human about it would spend attention on the one case that cannot be wrong.";
  "A word leaving is the whole reason the record exists, and this cannot clear one even by mistake: it only ever adds. So a word that has gone is still missing afterwards and still fails the gate, and the heavy command stays the only way to say that losing the setting was meant.";
  arguments_assert(arguments, 0);
  let found = await storage_local_key_words_found();
  let recorded = await storage_local_key_words();
  let added = [];
  for (let word of found) {
    let known = list_includes(recorded, word);
    if (known) {
      continue;
    }
    list_add(recorded, word);
    list_add(added, word);
  }
  let none = list_empty_is(added);
  if (none) {
    let nothing = {
      added,
      wrote: false,
    };
    return nothing;
  }
  recorded.sort();
  let path = storage_local_key_words_path();
  await file_overwrite_json(path, recorded);
  let done = {
    added,
    wrote: true,
  };
  return done;
}
