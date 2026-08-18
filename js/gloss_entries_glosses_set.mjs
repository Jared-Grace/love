import { gloss_entries_values_set_generic } from "./gloss_entries_values_set_generic.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
export function gloss_entries_glosses_set(entries, glosses, message) {
  "Give a passage's words their new short English, matching them up by where they stand rather than by the word they are about, and leaving the prose beside each word exactly as it was found.";
  "It is the twin of the mender over the prose, asked of the other half of a word's row, and the two are kept apart because they are written in different sittings: the prose is rewritten for its voice, and this is written where an earlier author left a marker standing in place of a meaning.";
  let key = gloss_entry_gloss_key();
  let r = gloss_entries_values_set_generic(entries, glosses, message, key);
  return r;
}
