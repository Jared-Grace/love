import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function giveaway_record_row_picture_is(row) {
  arguments_assert(arguments, 1);
  ("$plain row");
  ("Whether one row of the giveaway record is a cropped painting rather than a recording or the words of a psalm.");
  ("★ IT IS THE TWIN OF THE SONG TEST BESIDE IT AND EXISTS FOR THE SAME REASON: THE RECORD STOPPED BEING ALL ONE THING. The two kinds in it are kept apart by two different facts about the world - a recording sits in a download folder and is named by a rule that spells out its psalm, a crop sits in this repo and is named after its painter - so a check written for one of them is wrong for the other, and the only safe way to write either is to say out loud which rows it is asking about.");
  ("Both tests are spelled rather than one test and a negation, because a negation would quietly take in the words of a psalm as well, and quietly take in whatever fifth kind is added next.");
  let picture_is = equal(row.kind, "picture");
  return picture_is;
}
