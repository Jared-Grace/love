import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_game_plant_passages } from "./g_game_plant_passages.mjs";
import { property_get } from "./property_get.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function g_game_plants(chapters, pool) {
  "One playthrough's plants - the chapters that player chose cut into runs of preaching, each holding as many of the written arcs as its preaching pays for.";
  "The two halves of the game meet HERE and they are made at different times. The chapters are the player's, chosen when the game begins, so a plant's length is worked out now. The arcs are authored long before, drawn as a pool with no plant anywhere in them. This walks the plants and hands the pool out.";
  "Which way round that goes was got wrong once and it is worth keeping why. Plants used to draw a head COUNT and take their length from the people in them, with the chapters laid alongside afterwards to see what they had covered. That is only sound if the chapters are known in advance - and they are not, because the player picks them. Sizing a plant by its cast and then discovering it spans eleven chapters is not pacing, it is a report of what happened.";
  ("A plant's turn budget comes from its LINES, through ",
    fn_name("g_passage_match_count"),
    " - how much preaching there is to hold conversations around. The question share comes off the top, because those turns are spent asking rather than on anybody's arc.");
  ("The leader is taken next, out of the plant's DAYS rather than out of what is left. An elder is formed over a set amount of time and the rest of the plant fits around that; a leader paid a share of the remainder would grow whenever the plant did and never let the room grow at all.");
  ("Converts are then taken from the pool IN ORDER until the rest of the budget is met, and never reused - a face met in the first plant cannot turn up again in the fourth. The last one is only taken if taking it lands nearer the budget than stopping would, so a plant does not overspend by most of an arc to avoid being a few turns short.");
  ("A plant that runs out of pool is UNFINISHED rather than failed. Both supplies are sized to each other so both run low together, and the last plant of a game is the remainder of each - counting that as a fault would report the end of the content as something the player did.");
  let s = g_generation_settings();
  let cut = await g_game_plant_passages(chapters);
  let held = pool.length;
  let cursor = 0;
  let plants = [];
  let index = -1;
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
  return plants;
}
