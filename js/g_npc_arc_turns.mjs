import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_npc_arc_turns(next) {
  "How many turns one npc is worth, drawn once and then fixed.";
  "This is drawn for the npc rather than for the plant, because the npc is what gets written and the plant is only a group of them. An arc that belonged to a plant would have to be rewritten every time the grouping changed - which is now every game.";
  let s = g_generation_settings();
  let r = random_bell_low_middle_high(
    next,
    s.arc_turns_low,
    s.arc_turns_mean,
    s.arc_turns_high,
  );
  return r;
}
