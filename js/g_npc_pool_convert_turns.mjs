import { multiply_round } from "./multiply_round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { g_sermon_days_total } from "./g_sermon_days_total.mjs";
import { g_arc_conversations_a_day } from "./g_arc_conversations_a_day.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export async function g_npc_pool_convert_turns() {
  "How many turns of convert arc need writing - enough to spend every day of preaching the sermon supply holds.";
  "Turns rather than a head COUNT, and that is a correction rather than a preference. Counting heads means dividing by an arc's usual length, and an arc drawn near thirty but reaching ninety above and only twelve below does not AVERAGE thirty - the long tail pulls it to about thirty-six. Sizing the pool on the middle over-bought by a fifth and asked for three hundred and ninety-two days of preaching out of three hundred and nineteen. A total cannot drift like that, because whoever draws the arcs stops when the total is reached.";
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
  let r = multiply_round(convert_turns, s.npc_pool_multiple);
  return r;
}
