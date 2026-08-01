import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_generation_plan() {
  "Works out every budget a plant's content generation needs, from the settings alone, so the same settings always give the same plan.";
  "It decides nothing. Every number here is a sum over numbers somebody chose, which is what makes it safe to re-run and safe to disagree with - change the setting, not this.";
  "The npc count is DERIVED and comes out as a RANGE, because one arc is one npc and the arcs may be long or short. Fewest npcs is every arc at its longest; most is every arc at its shortest.";
  let s = g_generation_settings();
  let conversations_per_day = divide(s.day_matches, s.conversation_turns);
  let plant_matches = multiply(s.day_matches, s.plant_days);
  let plant_conversations = divide(plant_matches, s.conversation_turns);
  let top = multiply(plant_matches, s.question_matches_percent);
  let question_matches = divide(top, 100);
  let arc_matches = subtract(plant_matches, question_matches);
  let arc_conversations = divide(arc_matches, s.conversation_turns);
  let leader_conversations = divide(
    s.leader_conversations_minimum + s.leader_conversations_maximum,
    2,
  );
  let other_conversations = subtract(arc_conversations, leader_conversations);
  let divided = divide(other_conversations, s.arc_conversations_maximum);
  let npcs_fewest = 1 + Math.ceil(divided);
  let divided2 = divide(other_conversations, s.arc_conversations_minimum);
  let npcs_most = 1 + Math.floor(divided2);
  let r = {
    conversations_per_day,
    plant_matches,
    plant_conversations,
    question_matches,
    arc_matches,
    arc_conversations,
    leader_conversations,
    other_conversations,
    npcs_fewest,
    npcs_most,
  };
  return r;
}
