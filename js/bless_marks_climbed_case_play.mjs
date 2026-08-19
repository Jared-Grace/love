import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_marks_climbed } from "./bless_marks_climbed.mjs";
export function bless_marks_climbed_case_play(one) {
  arguments_assert(arguments, 1);
  ("Plays out one written-down case and hands back what actually happened, for the gate");
  ("to hold against what the case says should have.");
  ("It exists only to unpack. The corpus keeps a crowd size and a stride under names, and");
  ("the play wants them as two arguments in order, so somebody has to take one apart - and");
  ("the gate that compares answers should not also be the thing that knows what a case is");
  ("made of.");
  let count = property_get(one, "count");
  let stride = property_get(one, "stride");
  let climbed = bless_marks_climbed(count, stride);
  return climbed;
}
