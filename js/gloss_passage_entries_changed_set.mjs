import { list_empty_is } from "./list_empty_is.mjs";
import { gloss_passage_entries_set } from "./gloss_passage_entries_set.mjs";
export function gloss_passage_entries_changed_set(passage, entries, changes) {
  "Put one passage's explanations back after they have been worked over, and hand back the record of what changed.";
  "A passage nothing changed in is left exactly as it was found rather than written back out identical. The chapter these sit in is read by other people while a sweep runs, and a file whose bytes did not need to move should not move.";
  "So the record of changes is what decides whether to write, which is why it is asked for rather than worked out here - only the sweep that made the changes knows what counts as one.";
  let none_changed = list_empty_is(changes);
  if (none_changed) {
    return changes;
  }
  gloss_passage_entries_set(passage, entries);
  return changes;
}
