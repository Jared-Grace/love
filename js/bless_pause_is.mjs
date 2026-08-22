import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { bless_still_chance } from "./bless_still_chance.mjs";
export function bless_pause_is(fraction, walker) {
  arguments_assert(arguments, 2);
  ("Whether this is the moment somebody stops walking and stands about instead, drawn from");
  ("a number between nought and one and from which kind of person they are.");
  ("A pace alone gives a person one speed for the whole game, and somebody walking at a");
  ("perfectly even rate for an hour is a machine however slow the rate is. Real walking is");
  ("uneven: people stop, look at something, and set off again. So a stop is asked for");
  ("afresh at every step rather than being a thing a person IS.");
  ("Which also means nobody is stuck. A person who has stood for a whole minute is simply");
  ("somebody the draw went against several times running, and their next step comes with");
  ("the same chance as anybody else's - so a crowd never quietly sorts itself into walkers");
  ("and statues.");
  ("The kind is asked for because the two kinds want opposite answers, and the numbers");
  ("themselves are said next door rather than here, where the reasons for them can be");
  ("written down beside them.");
  ("What a yes now BUYS has changed, and that is why the question is worth asking at all.");
  ("It used to skip a single step, so a yes was a person who did nothing for one wait and");
  ("then carried on - which is a stutter in a walk rather than a stop. It now begins a");
  ("stretch of standing and looking about, so a yes is somebody deciding to stop, and the");
  ("difference is the difference between a picture that hesitated and a person who did.");
  let chance = bless_still_chance(walker);
  let pausing = less_than(fraction, chance);
  return pausing;
}
