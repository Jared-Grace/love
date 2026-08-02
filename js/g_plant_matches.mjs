import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_plant_matches(days, arc_turns) {
  "How a plant's matches divide - the ones an arc is being spoken in, and the ones left over for questions.";
  "Questions are what fills the days the arcs do not, so their share is worked out here rather than chosen. The setting of a quarter is a PLANNING figure: it is what the days are estimated from before anything is written, and once the arcs exist their real length decides the split. An arc that came out shorter than it was drawn does not shorten the plant - it hands its matches to questions, and the day is as full as it ever was.";
  "This is the one place the two supplies meet, so it is also where a mismatch would show. A question share far above the planning figure says the arcs are being written short; far below says the days are too few for what was written.";
  let s = g_generation_settings();
  let matches = multiply(days, s.day_matches);
  let arc_matches = arc_turns;
  let question_matches = subtract(matches, arc_matches);
  let question_percent = multiply_divide_round(question_matches, 100, matches);
  let r = {
    matches,
    arc_matches,
    question_matches,
    question_percent,
  };
  return r;
}
