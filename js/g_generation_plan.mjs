import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
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
  ("The floor on the count is a scheduling fact, not a taste. An npc is once a day, so the people holding an unplayed beat must number at least the conversations that day asks for - and one more than that, or the day is a list being cleared rather than a choice being made.");
  let per_day_whole = Math.ceil(conversations_per_day);
  let npcs_minimum = Math.max(per_day_whole, s.npcs_available_minimum);
  let npcs_floor_met = greater_than_equal(npcs_fewest, npcs_minimum);
  ("The most conversations a day may hold is set by the fewest matches one may contain. Cutting the day into more pieces than that makes each piece too small to be worth the approach it costs.");
  let per_day_most = divide(s.day_matches, s.conversation_matches_minimum);
  let conversations_per_day_maximum = Math.floor(per_day_most);
  ("Arc length is the quantity that can fail to schedule, because an arc of nine conversations needs nine separate days to be spent in.");
  let days_fit = less_than_equal(s.arc_conversations_maximum, s.plant_days);
  let leader_days_fit = less_than_equal(
    s.leader_conversations_maximum,
    s.plant_days,
  );
  let r = {
    conversations_per_day,
    conversations_per_day_maximum,
    plant_matches,
    plant_conversations,
    question_matches,
    arc_matches,
    arc_conversations,
    leader_conversations,
    other_conversations,
    npcs_fewest,
    npcs_most,
    npcs_minimum,
    npcs_floor_met,
    days_fit,
    leader_days_fit,
  };
  return r;
}
