import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_entry_same_as_key } from "./gloss_entry_same_as_key.mjs";
export function gloss_entry_same_as_read(entry) {
  "The pointer one word explanation is wearing, or nothing at all where it carries its own words.";
  "$plain entry";
  "the entry is one authored explanation out of the store, the same shape the writer wrote.";
  "A pointer says which earlier word this one is the same as, by its spelling and by the verse it stands in. Both halves are needed: a spelling on its own picked out several different explanations in half the places it was tried - in as a time and in as a place, of five ways over - so a reader following the spelling alone would have copied the wrong meaning and said nothing about having chosen.";
  "It is read as a part of the entry rather than found in the prose, because whether a sentence is pointing cannot be read off its wording. A pointer and a full explanation open with the same words, and thousands of each sit in the store.";
  let property = gloss_entry_same_as_key();
  let r = property_get_or_null(entry, property);
  return r;
}
