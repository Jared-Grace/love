import { property_get } from "./property_get.mjs";
import { function_name_unmistakable_is } from "./function_name_unmistakable_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
export function qa_commit_named_entry_stale_is(entry) {
  "Whether one remembered judgement holds a name the reader can no longer say, and so was written by a reader that no longer exists";
  "The test is a single everyday word. The reader cannot produce one any more, so a record holding one certainly came from the older reader. Nothing here guesses at which names look wrong - it asks the same question the reader now asks, and disbelieves any record that disagrees";
  "One entry is the unit rather than one name, because the names of a judging were all worked out together by one reader. Half a record from a replaced reader is not a record of anything, and it also means an entry with two spoiled gates is one answer here rather than two";
  "There is a second way to be no record of anything, and it does not involve the reader at all: a judging that did not come back green and yet named no red gate. That is what a run killed or crashed partway leaves behind, and the record held one on 2026-08-03. Every question anyone can ask of it comes back empty, so it says only that something went wrong somewhere - which is the answer a commit already has before it is judged at all.";
  "It has to be forgotten rather than left to hold the deploy, because a reader that treats it as unproven is right and can never be satisfied. The entry cannot improve; only a fresh judging can replace it, and it will not be judged again while it sits there looking judged.";
  let green = property_get_or_null(entry, "green");
  let failed = property_get_or_null(entry, "failed");
  let broken = not(green);
  let silent = list_empty_is_or_null(failed);
  let contentless = and(broken, silent);
  if (contentless) {
    return true;
  }
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
