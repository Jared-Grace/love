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
  ("One step in ten, and the share came down once a step began to LAST the whole wait");
  ("before the next one. While a step was over in a moment, a person spent nearly all of");
  ("every wait standing still anyway and one skipped step in four was barely noticed. Now");
  ("the picture is moving for the whole of a wait, so a skipped step is the only time");
  ("anybody is still at all - and at one in four that fell on somebody every few seconds,");
  ("which read as walking that kept catching rather than as a person stopping to look at");
  ("something.");
  let pausing = less_than(fraction, 0.1);
  return pausing;
}
