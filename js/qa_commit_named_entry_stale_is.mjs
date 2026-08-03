import { property_get } from "./property_get.mjs";
import { function_name_unmistakable_is } from "./function_name_unmistakable_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
export function qa_commit_named_entry_stale_is(entry) {
  "Whether one remembered judgement holds a name the reader can no longer say, and so was written by a reader that no longer exists";
  "The test is a single everyday word. The reader cannot produce one any more, so a record holding one certainly came from the older reader. Nothing here guesses at which names look wrong - it asks the same question the reader now asks, and disbelieves any record that disagrees";
  "One entry is the unit rather than one name, because the names of a judging were all worked out together by one reader. Half a record from a replaced reader is not a record of anything, and it also means an entry with two spoiled gates is one answer here rather than two";
  let named = property_get(entry, "named");
  for (let gate of object_property_names(named)) {
    let names = property_get(named, gate);
    for (let name of names) {
      let unmistakable = function_name_unmistakable_is(name);
      if (not(unmistakable)) {
        return true;
      }
    }
  }
  return false;
}
