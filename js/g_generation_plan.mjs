import { g_plant_days_minimum_possible } from "./g_plant_days_minimum_possible.mjs";
import { g_arc_conversations_a_day } from "./g_arc_conversations_a_day.mjs";
import { ceil } from "./ceil.mjs";
import { floor } from "./floor.mjs";
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
  let conversations_per_day = g_arc_conversations_a_day();
  let plant_matches = multiply(s.day_matches, s.plant_days);
  let plant_conversations = divide(plant_matches, s.conversation_turns_mean);
  let top = multiply(plant_matches, s.question_matches_percent);
  let question_matches = divide(top, 100);
  let arc_matches = subtract(plant_matches, question_matches);
  let arc_conversations = divide(arc_matches, s.conversation_turns_mean);
  ("The leader's conversations are a share of the plant's DAYS, so a longer plant means a longer discipling rather than the same ten visits stretched thinner.");
  let leader_low = multiply(s.plant_days, s.leader_days_percent_minimum);
  let leader_conversations_minimum = divide(leader_low, 100);
  let leader_high = multiply(s.plant_days, s.leader_days_percent_maximum);
  let leader_conversations_maximum = divide(leader_high, 100);
  let leader_conversations = divide(
    leader_conversations_minimum + leader_conversations_maximum,
    2,
  );
  let leader_turns = multiply(leader_conversations, s.conversation_turns_mean);
  ("How SHORT a plant may be is asked elsewhere and only CHECKED here. This function reports whether the wanted minimum clears the floor; what the floor is is its own question, with its own three answers to take the largest of.");
  ("It was worked out here, from the leader alone, on the reasoning that every other quantity scales with a plant's length so only the leader's fixed hundred turns can fail to fit. That was wrong twice over - an arc needs a day per conversation however few turns it holds, and a room needs its converts paid for out of what the leader leaves - and both of those are floors that do not move with length either.");
  let plant_days_minimum_needed = g_plant_days_minimum_possible();
  let plant_days_minimum_fits = greater_than_equal(
    s.plant_days_minimum,
    plant_days_minimum_needed,
  );
  let other_conversations = subtract(arc_conversations, leader_conversations);
  let divided = divide(other_conversations, s.arc_conversations_maximum);
  let npcs_fewest = 1 + ceil(divided);
  let divided2 = divide(other_conversations, s.arc_conversations_minimum);
  let npcs_most = 1 + floor(divided2);
  ("The floor on the count is a TASTE - how many people a day should offer to choose between - so it is read straight from the settings and worked out from nothing.");
  ("It was derived, on the rule that a day needs one more person than it has conversations for. But the day's conversations are a MEAN, and a mean floors nothing: half the days ask for more than it. Taken at the worst day instead - every conversation drawn short - the same rule wants seven, which the cast does not reach.");
  ("Neither number is the answer, because the question was wrong. A day is a turn budget, and conversations are indivisible segments laid into it until the next will not fit. The count a day asks for is an OUTCOME of that, so whether the people are there is answered by scheduling and not by arithmetic here.");
  let npcs_minimum = s.npcs_available_minimum;
  let npcs_floor_met = greater_than_equal(npcs_fewest, npcs_minimum);
  ("There is deliberately NO cap on how many conversations a day holds. It had one, to stop a day being cut into pieces too small to be worth the approach they cost - but a conversation's own low end already says that, per conversation, and saying it twice only cost variety. A day of six short conversations and a day of two long ones are both wanted.");
  ("Arc length is the quantity that can fail to schedule, because an arc of nine conversations needs nine separate days to be spent in.");
  let days_fit = less_than_equal(s.arc_conversations_maximum, s.plant_days);
  let leader_days_fit = less_than_equal(
    leader_conversations_maximum,
    s.plant_days,
  );
  let r = {
    conversations_per_day,
    plant_matches,
    plant_conversations,
    question_matches,
    arc_matches,
    arc_conversations,
    leader_conversations_minimum,
    leader_conversations_maximum,
    leader_conversations,
    leader_turns,
    plant_days_minimum_needed,
    plant_days_minimum_fits,
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
