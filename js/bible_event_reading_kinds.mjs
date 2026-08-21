import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bible_event_reading_kinds(reading) {
  "$plain reading";
  "The kinds one reading of a gathered Bible event carries - the words saying what that passage is doing.";
  arguments_assert(arguments, 1);
  ("A reading holds several kinds and not one, because a scene usually does several things at once. Every tally and every covering walk over this list rather than over a single word, and that is why nothing here picks a first kind out for the caller.");
  let kinds = property_get(reading, "kinds");
  return kinds;
}
