import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { g_arc_conversations_a_day } from "./g_arc_conversations_a_day.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_leader_turns(convert_turns) {
  "How many turns the leader is worth, given what everybody else in the plant comes to.";
  "The leader is measured against the CONVERTS rather than against the plant, because the plant's length is not known yet - it is worked out from this answer. Asking for a share of the days directly would need the days, and the days need the leader, and neither can go first.";
  "So the share is solved instead of applied. Wanting the leader on three quarters of the days, and knowing how many arc conversations a day holds, there is exactly one leader length that lands there once the days have been worked out from the total. Every size of plant gets the same share without the share ever being checked afterwards.";
  let s = g_generation_settings();
  let a_day = g_arc_conversations_a_day();
  let low = divide(s.leader_days_percent_minimum, 100);
  let high = divide(s.leader_days_percent_maximum, 100);
  let share = divide(low + high, 2);
  let top = multiply(share, convert_turns);
  let room = subtract(a_day, share);
  let exact = divide(top, room);
  let r = round(exact);
  return r;
}
