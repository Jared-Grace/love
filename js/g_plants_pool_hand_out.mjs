import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { less_than } from "./less_than.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { greater_than } from "./greater_than.mjs";
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
    let converts = [];
    let convert_turns = 0;
    for (let step = 0; less_than(step, held); step++) {
      let spare = subtract(held, cursor);
      let none = less_than(spare, 1);
      if (none) {
        break;
      }
      let npc = pool[cursor];
      let turns = property_get(npc, "turns");
      let with_it = convert_turns + turns;
      let gap_stopping = numbers_apart(convert_turns, wanted);
      let gap_taking = numbers_apart(with_it, wanted);
      let nearer_stopping = less_than(gap_stopping, gap_taking);
      let started_is = greater_than(converts.length, 0);
      let full = nearer_stopping && started_is;
      if (full) {
        break;
      }
      list_add(converts, npc);
      convert_turns = with_it;
      cursor = cursor + 1;
    }
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
