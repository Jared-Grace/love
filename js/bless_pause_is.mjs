import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
export function bless_pause_is(fraction) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("Whether this is a moment somebody stands still instead of taking their step, drawn");
  ("from a number between nought and one.");
  ("A pace alone gives a person one speed for the whole game, and somebody walking at a");
  ("perfectly even rate for an hour is a machine however slow the rate is. Real walking is");
  ("uneven: people stop, look at something, and set off again. So a pause is asked for");
  ("afresh at every step rather than being a thing a person IS.");
  ("Which also means nobody is stuck. A person who stood still for a whole minute is");
  ("simply somebody the draw went against several times running, and their next step comes");
  ("with the same chance as anybody else's - so a crowd never quietly sorts itself into");
  ("walkers and statues.");
  let pausing = less_than(fraction, 0.25);
  return pausing;
}
