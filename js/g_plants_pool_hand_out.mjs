import { g_plant_converts_take } from "./g_plant_converts_take.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function g_plants_pool_hand_out(
  cut,
  index,
  s,
  held,
  cursor,
  pool,
  plants,
) {
  arguments_assert(arguments, 7);
  for (let plant of cut) {
    index = index + 1;
    let lines = property_get(plant, "lines");
    let days = property_get(plant, "days");
    let matches = g_passage_match_count(lines);
    let question_turns = multiply_divide_round(
      matches,
      s.question_matches_percent,
      100,
    );
    let arc_turns = subtract(matches, question_turns);
    let share_low = divide(s.leader_days_percent_minimum, 100);
    let share_high = divide(s.leader_days_percent_maximum, 100);
    let share = divide(share_low + share_high, 2);
    let leader_days = multiply(days, share);
    let leader_turns = multiply_round(leader_days, s.conversation_turns_mean);
    let leader_short = less_than(leader_turns, s.leader_turns_minimum);
    let conversations = divide(leader_turns, s.conversation_turns_mean);
    let leader_days_percent = multiply_divide_round(conversations, 100, days);
    let wanted = subtract(arc_turns, leader_turns);
    let r = g_plant_converts_take(held, cursor, pool, wanted);
    let convert_turns = property_get(r, "convert_turns");
    let converts = property_get(r, "converts");
    let spent = convert_turns + leader_turns;
    let npcs = converts.length + 1;
    let out_of_pool = greater_than_equal(cursor, held);
    let filled = {
      index,
      chapters: property_get(plant, "chapters"),
      start: property_get(plant, "start"),
      end: property_get(plant, "end"),
      lines,
      days,
      matches,
      question_turns,
      arc_turns,
      npcs,
      leader_turns,
      leader_short,
      leader_days_percent,
      convert_turns,
      converts,
      spent,
      over_budget: subtract(spent, arc_turns),
      unfinished: out_of_pool,
      floor_met: property_get(plant, "floor_met"),
      over_maximum: property_get(plant, "over_maximum"),
    };
    list_add(plants, filled);
  }
}
