import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_person_turn_quarters } from "./bless_person_turn_quarters.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_max } from "./list_max.mjs";
import { bless_person_turn_rest_ms } from "./bless_person_turn_rest_ms.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function bless_person_turn_ready(person, direction) {
  arguments_assert(arguments, 2);
  ("Whether somebody on the street has rested long enough since their last turn to turn to face this way now.");
  ("The rest is set by the BIGGER of the two turns - the one they last made and the one they are about to make - so a turn about is kept away from other turns on both sides of it.");
  ("Somebody who has never turned is ready at once.");
  let facing = property_get(person, "direction");
  let quarters = bless_person_turn_quarters(facing, direction);
  let quarters_last = property_get_or(person, "turn_quarters", 0);
  let bigger = list_max([quarters, quarters_last]);
  let rest_ms = bless_person_turn_rest_ms();
  let rest = multiply(rest_ms, bigger);
  let turned_at = property_get_or(person, "turn_at", 0);
  let since = date_milliseconds_since(turned_at);
  let early = less_than(since, rest);
  let ready = not(early);
  return ready;
}
