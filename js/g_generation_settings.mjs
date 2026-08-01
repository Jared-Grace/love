import { g_day_matches } from "./g_day_matches.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export function g_generation_settings() {
  "Every number a church-plant's content is generated from, in one place, so a run is repeatable from this file alone and never from a conversation somebody had once.";
  "Only CHOSEN numbers live here. Anything a sum can reach - conversations in a day, matches in a plant, how many people the arcs come to - is worked out by the plan that reads this, because a number written down twice is a number that can disagree with itself.";
  "The two that already had names keep them. Matches in a day and sermon lines in a day are read from their own functions rather than copied, so this cannot drift from the pacing the rest of the game is built on.";
  let day_matches = g_day_matches();
  let day_lines = g_day_lines();
  let r = {
    day_matches,
    day_lines,
    conversation_turns: 12,
    plant_days: 18,
    plant_days_minimum: 15,
    plant_days_maximum: 21,
    leader_conversations_minimum: 10,
    leader_conversations_maximum: 12,
    arc_conversations_minimum: 3,
    arc_conversations_maximum: 9,
    question_matches_percent: 25,
    npcs_available_minimum: 4,
  };
  return r;
}
