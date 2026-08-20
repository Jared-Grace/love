import { arguments_assert } from "./arguments_assert.mjs";
import { bible_sentence_end_marks_findings_sorted } from "./bible_sentence_end_marks_findings_sorted.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_folders_sentence_end_unmarked } from "./bible_folders_sentence_end_unmarked.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function bible_sentence_end_marks_findings_named(
  recorded,
  property_name,
  shipped,
) {
  "Everything the sorting found, with the three faults in the written-down list of languages that write no marks added to it: a bible finishing no sentence and not named, a name pointing at no bible anybody ships, and a name given to a bible that does finish its sentences.";
  "It asks the sorting for its answer rather than taking one, because the naming questions are read out of the sorted kinds and out of nothing else. Asked over the record directly they would gather up the never measured and the unreachable alongside the real cases, and offer all of them the one repair that only fits the real ones.";
  arguments_assert(arguments, 3);
  let r = bible_sentence_end_marks_findings_sorted(
    recorded,
    property_name,
    shipped,
  );
  let ended_none = property_get(r, "ended_none");
  let unread = property_get(r, "unread");
  let stored = property_get(r, "stored");
  let unstored = property_get(r, "unstored");
  let unreached = property_get(r, "unreached");
  let departed = property_get(r, "departed");
  let unmeasured = property_get(r, "unmeasured");
  let unfindable = list_map_property(ended_none, property_name);
  let named = bible_folders_sentence_end_unmarked();
  let unnamed = list_difference(unfindable, named);
  ("A NAME FOR A BIBLE NOBODY SHIPS IS A FINDING OF ITS OWN, and it used to be told as the opposite of what it is. The list of languages that write no marks was being subtracted from the bibles read and found to write some, so anything named and not read at all fell out of that subtraction and was reported as a bible that ends its sentences after all. Thai sat there: it is named here, it is in no bible this repo ships, and whoever read the fault was told to take the name out because its readers were being denied a reading - of a bible that is not there to read.");
  ("So the naming is asked two separate questions. Does this name point at a bible we ship, and if it does, was that bible read finishing sentences. The first has no repair in common with the second: one is a name left behind by a bible that went away, and the other is a bible that changed under a name still describing how it used to read.");
  let named_unshipped = list_difference(named, shipped);
  ("Only a bible really read and really found to finish a sentence is named wrongly. Reaching it by subtraction gathered up everything not in one list - the never measured, the empty in storage, the unreadable this afternoon - and offered every one of them the same single repair.");
  function lambda7(entry) {
    let none = property_equals(entry, "ended", 0);
    let some = not(none);
    return some;
  }
  let ended_some = list_filter(stored, lambda7);
  let findable = list_map_property(ended_some, property_name);
  let named_wrongly = list_intersection(named, findable);
  let r2 = {
    ended_none,
    unread,
    unstored,
    unreached,
    departed,
    unmeasured,
    unnamed,
    named_unshipped,
    named_wrongly,
  };
  return r2;
}
