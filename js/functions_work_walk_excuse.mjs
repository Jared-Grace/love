import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
export function functions_work_walk_excuse(reading) {
  arguments_assert(arguments, 1);
  ("The word for why a body that is mostly one walk excuses a function from the size ceiling, or nothing when it does not.");
  ("A walk is a loop that keeps pointing a name outside itself somewhere else - a line counter, a run of text being gathered, a note of what is still owed. Carry any piece of such a loop away into a function of its own and the name goes with it as a copy, so the two sides stop agreeing from the first turn onwards. The span cut refuses this by itself and says so, which is how the shape was found: the refusal is the proof, and this is only that refusal asked ahead of time.");
  ("Two things have to hold, and they are the same two the table asks. Set the walk aside and what is left must be a function anybody would accept, so what is left over is asked to pass the same ceiling. And the walk has to be the bulk of it, or the body is an ordinary one that happens to contain a loop.");
  ("No number of its own, the same as the table: it asks the one ceiling, so lowering that ceiling tightens this at the same moment.");
  ("Measured on 2026-08-16 over the ninety functions above the ceiling: four are a walk by this reading, their walks holding sixty-nine, fifty, thirty-nine and thirty-one lines against eleven, eight, twenty-one and fifteen outside. Ten more hold a walk that does not carry them, and the nearest of those has sixteen lines inside against forty outside - so the bulk half falls in open space rather than beside anything. Not one of the ninety fails on the ceiling half alone, which is what says that half is not yet doing any work and is there for the body that is one big walk with a second body bolted onto it.");
  ("This excuses length rather than forgiving it. A walk is still the worst thing in the repo to read, and the honest way out of one is to give the names it re-points a home of their own - one thing held and changed in place, which every piece of the walk can then be handed. Until somebody does that, cutting it would not improve it; it would break it.");
  let ceiling = functions_work_size_ceiling();
  let outside = property_get(reading, "outside");
  let rest_small_is = less_than_equal(outside, ceiling);
  if (not(rest_small_is)) {
    return null;
  }
  let mostly_is = property_greater_than(reading, "inside", outside);
  if (not(mostly_is)) {
    return null;
  }
  let word = "walk";
  return word;
}
