import { math_max } from "./math_max.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { g_plant_npcs_target } from "./g_plant_npcs_target.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_plant_npcs(index, next) {
  "How many people this plant actually holds - the size it was aiming at plus what the day gave it.";
  "A plant may fall BELOW its target and only rarely rises above it. The two sides are not symmetrical because the things they stand for are not: a plant that never filled up is ordinary, and a room that outgrew itself is the event the game is building towards.";
  "The big one is a separate roll rather than the top of a wider draw. Widening the draw to reach sixteen put more than half of the settled plants at fourteen or over - a bell's upper half spread across three numbers makes every one of them common. A one-in-ten roll says rare and can be moved by somebody who wants it rarer.";
  "The roll is taken BEFORE the branch, so the same number of draws is spent whichever way it goes and the run of plants after this one does not shift when a setting moves.";
  let s = g_generation_settings();
  let target = g_plant_npcs_target(index);
  let settled = greater_than_equal(target, s.plant_npcs_settle);
  let roll = next();
  let chance = divide(s.plant_npcs_large_percent, 100);
  let lucky = less_than(roll, chance);
  let large = settled && lucky;
  if (large) {
    let over = target + 1;
    let big = random_bell_low_middle_high(
      next,
      over,
      over,
      s.plant_npcs_maximum,
    );
    return big;
  }
  let under = subtract(target, s.plant_npcs_below_settle);
  let lowest = math_max(s.plant_npcs_first, under);
  let r = random_bell_low_middle_high(next, lowest, target, target);
  return r;
}
