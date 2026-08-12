import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_conversations_a_day() {
  "How many arc conversations one day holds - the day's matches less the ones questions take, divided by a conversation's usual length.";
  "This is the number every other quantity here turns on, which is why it is worked out once and read rather than written down. It is what converts turns into days and days back into turns, so a second copy of it anywhere would be a second answer to how long a plant is.";
  "It is the SIZING sum and it runs about a seventh high against a day that was actually scheduled. Conversations are indivisible, so a day's arc share cannot be packed exactly and what will not fit falls to the questions. This says three and a half where ";
  (fn_name("g_plant_days"), " lays down three.");
  ("The gap is left standing rather than folded in, because the two are different questions. Sizing asks what a day is worth and wants the whole share counted; scheduling asks what a day holds and only gets what fits. Whether the loss belongs in the turns-to-days conversions that read this is a real question and is not yet answered.");
  let s = g_generation_settings();
  let kept = subtract(100, s.question_matches_percent);
  let arc_matches = multiply_divide(s.day_matches, kept, 100);
  let r = divide(arc_matches, s.conversation_turns_mean);
  return r;
}
