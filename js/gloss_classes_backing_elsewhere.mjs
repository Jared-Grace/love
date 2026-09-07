import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_classes_backing_elsewhere(classes) {
  "The marked classes where the dictionary took its own root apart and arrived somewhere other than the root the explanation named, most-seen first: the ones worth a person's eye.";
  "This is the queue the whole reading was for. Eight hundred and thirty sightings is a pile nobody opens, and the two answers beside this one are the two nobody needs to: backed means the dictionary itself took the next step the explanation took, and silent means the dictionary was never asked and so has said nothing that could be disagreed with. What is left is the case where the dictionary was asked, answered, and answered differently - twenty two classes and sixty three sightings when this was written, which is one screen.";
  "Most-seen first because a class is a wording repeated across chapters and mending the commonest one mends the most prose. The count is already on each class and is not recomputed here.";
  "What comes back is a new list, so the classes handed in keep the order they came in and a caller can ask this more than once. The classes themselves are the same objects and not copies, which is what lets a reader follow one back to the words it was found on.";
  "A class that was never marked is not in the answer, because an unmarked class carries no reading at all and reading its absence as elsewhere would fill the queue with work nobody has established is work. The reading is asked for in the way that answers nothing where there is nothing, rather than the way that refuses: an unmarked class is an ordinary thing to be handed, since marking is a separate step and a caller may hold classes from before it was taken. Nothing is not elsewhere, so the class falls out of the queue by the same test as a backed one.";
  "$plain classes";
  "it names classes already carrying the reading of the dictionary's walk. It names nothing that runs.";
  arguments_assert(arguments, 1);
  function elsewhere_is(one_class) {
    let backing = property_get_or_null(one_class, "backing");
    let r = equal(backing, "elsewhere");
    return r;
  }
  let picked = list_filter(classes, elsewhere_is);
  function class_count(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  let ranked = list_sort_number_mapper_reverse(picked, class_count);
  return ranked;
}
