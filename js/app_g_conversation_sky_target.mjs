import { app_g_day_state } from "./app_g_day_state.mjs";
import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { g_time_index } from "./g_time_index.mjs";
import { property_get } from "./property_get.mjs";
import { positive_is } from "./positive_is.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function app_g_conversation_sky_target(conversation_fraction) {
  ("the sky PHASE a conversation drifts to at the given progress (0..1), aware of the day SLICE it belongs to. in a day session (slices_total > 0) the conversation advances the sky only through ITS slice — from slices_done / slices_total to (slices_done + 1) / slices_total of the working day, which ",
    g_day_sky_phase.name,
    " maps onto 6 AM → 7 PM — so N people fill the day one slice each and the real game just advances its own slice. the #day_conversation demo runs a 1-slice day, so one whole conversation spans 6 AM → 7 PM and the change is easy to SEE. with NO day session (an ordinary tapped-npc conversation) it keeps the standalone morning → night arc (fraction times the night phase index), so real play is untouched.");
  let state = app_g_day_state();
  let slices_total = property_get(state, "slices_total");
  let in_session = positive_is(slices_total);
  if (in_session) {
    let day_fraction = app_g_conversation_day_fraction(conversation_fraction);
    let phase = g_day_sky_phase(day_fraction);
    return phase;
  }
  let night = g_time_index("night");
  let arc = multiply(conversation_fraction, night);
  return arc;
}
