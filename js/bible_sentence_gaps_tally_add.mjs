import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_tally_add } from "./list_tally_add.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
export function bible_sentence_gaps_tally_add(tallied, joined) {
  "Folds one counting of how far sentences carried on into a running tally, keeping nothing of it afterwards.";
  "Counting them one at a time into a tally that is already being kept is what lets a great many be counted at all. The pooled way holds every gap at once, which for every group of four bibles out of thirty-eight is twenty-one million numbers held only to be added up.";
  "The furthest is not tracked here. It can be read straight off the tally at the end, the tally's keys being exactly the distances that turned up, so keeping it alongside would be a second copy of something already written down.";
  arguments_assert(arguments, 2);
  let gaps = property_get(joined, "gaps");
  let tally = property_get(tallied, "tally");
  list_tally_add(tally, gaps);
  let left = property_get(tallied, "counted");
  let right = list_size(gaps);
  let counted = add(left, right);
  property_set(tallied, "counted", counted);
  let left2 = property_get(tallied, "unread");
  let right2 = property_get(joined, "unread");
  let unread = add(left2, right2);
  property_set(tallied, "unread", unread);
  let left3 = property_get(tallied, "unfinished");
  let right3 = property_get(joined, "unfinished");
  let unfinished = add(left3, right3);
  property_set(tallied, "unfinished", unfinished);
  return tallied;
}
