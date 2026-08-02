import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_plant_days_turns(arc_turns) {
  "How many days a plant lasts, worked out from the turns its cast is worth.";
  "The day count is DERIVED here, which is the opposite of the way it used to run. A plant used to be a chosen number of days that a cast was then squeezed into; now the cast is chosen and the days are however long it takes to spend it. That is what lets a first plant be genuinely small rather than a small cast rattling around a fixed three weeks.";
  "Rounded UP, because a part day still has to be played in a whole one.";
  let s = g_generation_settings();
  let kept = subtract(100, s.question_matches_percent);
  let a_day = multiply_divide(s.day_matches, kept, 100);
  let exact = divide(arc_turns, a_day);
  let r = Math.ceil(exact);
  return r;
}
