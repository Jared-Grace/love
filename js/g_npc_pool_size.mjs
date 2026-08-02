import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { g_sermon_days_total } from "./g_sermon_days_total.mjs";
import { g_arc_conversations_a_day } from "./g_arc_conversations_a_day.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export async function g_npc_pool_size() {
  "How many npcs need writing - enough converts to spend every day of preaching the sermon supply holds.";
  "Worked out from the sermon rather than chosen, because the sermon is the only fixed quantity left. Choosing this would be choosing how much of the preaching gets used.";
  "Leaders are not counted here. A leader's length is solved from the converts around them, so leaders are as many as there are plants and that is not known until a game groups them.";
  let s = g_generation_settings();
  let days = await g_sermon_days_total();
  let a_day = g_arc_conversations_a_day();
  let turns_a_day = multiply(a_day, s.conversation_turns_mean);
  let arc_turns = multiply(days, turns_a_day);
  let low = divide(s.leader_days_percent_minimum, 100);
  let high = divide(s.leader_days_percent_maximum, 100);
  let share = divide(low + high, 2);
  let leader_part = divide(share, a_day);
  let convert_part = subtract(1, leader_part);
  let convert_turns = multiply(arc_turns, convert_part);
  let slots = divide(convert_turns, s.arc_turns_mean);
  let wanted = multiply(slots, s.npc_pool_multiple);
  let r = Math.round(wanted);
  return r;
}
