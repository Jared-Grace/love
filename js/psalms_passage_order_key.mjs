import { multiply_add } from "./multiply_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function psalms_passage_order_key(passage) {
  "$plain passage";
  "One number standing for where a passage falls in the reading of its chapter, so that two passages can be put in order by comparing two numbers.";
  "The verse it opens at decides, and the verse it ends at only settles the tie. A song of verses five to nine and a song of verse five alone both begin at the same place, and the shorter one is read first, because the longer one carries the reader past where the shorter one stops.";
  "The chapter is deliberately not part of this. Two passages are only ever compared within one chapter's playlist, and folding the chapter in would make a number that sorts correctly across chapters and hides that this was never asked to.";
  "A thousand is room enough and then some. The longest psalm ends at verse one hundred and seventy six, so no verse can reach far enough to spill into the place the opening verse occupies.";
  arguments_assert(arguments, 1);
  let verse_first = property_get(passage, "verse_first");
  let verse_last = property_get(passage, "verse_last");
  let r = multiply_add(verse_first, 1000, verse_last);
  return r;
}
