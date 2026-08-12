import { g_generation_settings } from "./g_generation_settings.mjs";
import { add } from "./add.mjs";
import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
export function g_plant_day_leader_turns(next) {
  "How many turns the leader takes on one day - a drawn conversation on the days they come, and nought on the days they do not.";
  "Whether they come is rolled against the share of days they are wanted on, taken as the middle of the floor and the ceiling written for them. The two are the same number today, so the middle is that number; keeping the roll makes a leader who is not on every day cost a setting rather than a rewrite.";
  "Their length is DRAWN like anybody else's, because the leader has no arc waiting to be spent. Everybody else is written once and runs out, which is what ends a plant; the leader goes on for as long as the plant does, so what they come to in total is an outcome of its length rather than a number guessed before it.";
  let s = g_generation_settings();
  let share_low = s.leader_days_percent_minimum;
  let share_high = s.leader_days_percent_maximum;
  let top = add(share_low, share_high);
  let share = divide(top, 2);
  let rolled = next();
  let b = divide(share, 100);
  let comes = less_than(rolled, b);
  let drawn = random_bell_low_middle_high(
    next,
    s.conversation_turns_low,
    s.conversation_turns_mean,
    s.conversation_turns_high,
  );
  let r = comes ? drawn : 0;
  return r;
}
