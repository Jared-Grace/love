import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_conversations_a_day() {
  "How many arc conversations one day holds - the day's matches less the ones questions take, divided by a conversation's usual length.";
  "This is the number every other quantity here turns on, which is why it is worked out once and read rather than written down. It is what converts turns into days and days back into turns, so a second copy of it anywhere would be a second answer to how long a plant is.";
  let s = g_generation_settings();
  let kept = subtract(100, s.question_matches_percent);
  let arc_matches = multiply_divide(s.day_matches, kept, 100);
  let r = divide(arc_matches, s.conversation_turns_mean);
  return r;
}
