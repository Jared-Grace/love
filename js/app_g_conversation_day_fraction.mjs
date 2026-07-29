import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
export function app_g_conversation_day_fraction(conversation_fraction) {
  "the fraction of the whole working DAY a conversation sits at, given its slice: (slices_done + conversation_fraction) / slices_total. shared by the conversation sky-target (fraction -> sky phase) and the #day_conversation toast (fraction -> clock) so both name the SAME point in the day. only meaningful in a day session (slices_total > 0). deliberately does NOT spell the sky-target function name: it imports THIS, so a live back-reference would form an import cycle whose binding reads undefined at call time";
  let state = app_g_day_state();
  let slices_total = property_get(state, "slices_total");
  let slices_done = property_get(state, "slices_done");
  let within = add(slices_done, conversation_fraction);
  let day_fraction = divide(within, slices_total);
  return day_fraction;
}
