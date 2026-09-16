import { gloss_entry_same_as_read } from "./gloss_entry_same_as_read.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_passages_same_as_explains } from "./gloss_passages_same_as_explains.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_entries_same_as_followed(entries, passages) {
  "One passage's word explanations with every pointer followed, so each entry carries the words a reader is meant to see rather than the address of them.";
  "$plain entries";
  "the entries are the explanations of one passage, the stretch the reader has in front of them.";
  "$plain passages";
  "the passages are the whole chapter, because the verse a pointer names may sit in any of them.";
  "The pointer is followed here, close to the screen, rather than the store being written out with the words repeated in it. The writer names a meaning once and every later word carrying it says so, which is what makes a mended explanation mend everywhere it is used instead of in the one place somebody remembered.";
  "A pointer that does not land on exactly one explanation is left alone rather than guessed at. The gate over the store refuses that case, so reaching it means something was published unchecked, and showing the reader nothing is honest where showing them the wrong meaning would not be.";
  function entry_follow(entry) {
    let pointer = gloss_entry_same_as_read(entry);
    if (null_is(pointer)) {
      return entry;
    }
    let explains = gloss_passages_same_as_explains(passages, pointer);
    let left = list_size(explains);
    let settled = equal(left, 1);
    if (not(settled)) {
      return entry;
    }
    let explain = list_first(explains);
    let key = gloss_entry_explain_key();
    let followed = object_copy_property_set(entry, key, explain);
    return followed;
  }
  let r = list_map(entries, entry_follow);
  return r;
}
