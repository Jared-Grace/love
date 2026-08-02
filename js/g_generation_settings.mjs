import { g_day_matches } from "./g_day_matches.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export function g_generation_settings() {
  "Every number a church-plant's content is generated from, in one place, so a run is repeatable from this file alone and never from a conversation somebody had once.";
  "Only CHOSEN numbers live here. Anything a sum can reach - conversations in a day, matches in a plant, how many people the arcs come to - is worked out by the plan that reads this, because a number written down twice is a number that can disagree with itself.";
  "The two that already had names keep them. Matches in a day and sermon lines in a day are read from their own functions rather than copied, so this cannot drift from the pacing the rest of the game is built on.";
  "A conversation's length is a DRAW, not a size, so it takes three numbers rather than one - a low end, a middle it sits near, and a high end it rarely reaches. One npc is short some days and long others, and that variety is wanted.";
  "The low end is a setting because getting into a conversation costs a fixed price - walk over, tap the player, pray, pick the prayer, tap the person, ask for discernment, choose an opener - and a conversation holding one or two turns spends more of itself on the approach than on the Scripture it exists to reach. It also fixes the most conversations a day can hold, which is why that number is worked out rather than written down.";
  "The swap count is how many times the finished arc lengths are nudged - two arcs picked, one giving a turn to the other - which takes the arithmetic out of a descending list without changing the total or the number of people. Fifty is enough for the lengths to stop looking counted and few enough that the descent's shape survives. It is seeded on the chapter code, so a chapter always lands the same way.";
  "The leader is measured in DAYS, as a share of the plant's own length, rather than in a count of conversations. A flat ten-to-twelve said the same thing about a five-day plant and a twenty-day one, and it can only be right about one of them. Half the days is the floor: the leader is the person being formed into an elder, and formation that happens on a minority of days is not formation.";
  "The ceiling is every day. That is the logical bound rather than a preference - an npc holds one conversation a day, so the leader cannot be seen more often than the plant has days. Lower it if a leader who is always there stops feeling like a choice.";
  "The fewest CONVERSATIONS an arc may hold is one, and a one-conversation arc is a whole person rather than a thin one - somebody who hears and believes, and whose discipling then happens through the other believers rather than on screen. Holding the floor at three bought nothing and cost variety, because the budget then had to go into fewer, longer arcs.";
  let day_matches = g_day_matches();
  let day_lines = g_day_lines();
  let r = {
    day_matches,
    day_lines,
    conversation_turns_low: 6,
    conversation_turns_mean: 12,
    conversation_turns_high: 24,
    plant_days: 18,
    plant_days_minimum: 15,
    plant_days_maximum: 21,
    leader_days_percent_minimum: 50,
    leader_days_percent_maximum: 100,
    leader_turns_minimum: 100,
    arc_conversations_minimum: 1,
    arc_conversations_maximum: 9,
    question_matches_percent: 25,
    arc_length_swaps: 50,
    npcs_available_minimum: 4,
  };
  return r;
}
