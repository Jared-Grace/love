import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function gloss_classes_claimed_known_mark(classes, known) {
  "Classes of disagreeing roots with a mark on each saying whether the root the explanation named is a word the dictionary knows at all.";
  "This is what separates a disagreement about depth from a piece of nonsense, and it is the only reading that decides whether prose can be repaired or has to be thrown away. An explanation of magpasalamat naming pasalamat named a real Cebuano word one layer above the root - a reader is told nothing false, only less far back than the dictionary goes. An explanation of makalilisang naming lilisang named a run of letters nobody speaks: the reduplication was read as part of the root. Both come back as the explanation naming a word the dictionary's root sits inside, and nothing in the shape of the two tells them apart.";
  "The dictionary answers it because it already holds every word this corpus was checked against. Forty-eight classes were read by hand before this was written, and the split fell almost exactly where the dictionary knowing the word fell - which is what makes the test worth keeping rather than the reading.";
  "A word the dictionary does not know is not thereby proved to be nonsense. The dictionary is a dictionary and not the language, so this marks where to look rather than what is wrong.";
  function class_mark(one_class) {
    let claimed = property_get(one_class, "claimed");
    let held = property_get_or_null(known, claimed);
    let missing = null_is(held);
    let claimed_known = not(missing);
    let marked = object_merge(one_class, { claimed_known });
    return marked;
  }
  let r = list_map(classes, class_mark);
  return r;
}
