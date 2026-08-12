import { list_filter_size } from "./list_filter_size.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { g_arc_conversation_lengths } from "./g_arc_conversation_lengths.mjs";
import { list_add } from "./list_add.mjs";
import { g_plant_days } from "./g_plant_days.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_sum } from "./list_sum.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function g_plant_days_report(seed) {
  "One plant scheduled end to end, reported as the shape of its days - how many people it took, how long it ran, what the leader came to, and what each day held. The one to run to see whether a plant's pacing is any good.";
  "It builds a ROOM rather than drawing to a turn budget, because a room is a chosen count and that is the choice being tested. Drawing to a budget instead made arc length look like it did nothing: longer arcs bought fewer people covering the same turns, so the plant came out the same length either way. With the count held, a longer arc is a longer plant, which is the question actually being asked.";
  "The LEADER is not built here and is not one of the converts. They are drawn day by day inside the scheduling, so their turns are reported back rather than chosen - that total against the least a leader may be worth is the check this exists to make.";
  "Seeded off a word so the same word gives the same plant back. Two words give two plants out of the same settings, which is the variety this is here to look at.";
  let next = random_seed_generator_from_text(seed);
  let s = g_generation_settings();
  let converts = subtract(s.plant_npcs_settle, 1);
  let conversation_lists = [];
  for (let index = 0; less_than(index, converts); index++) {
    let turns = g_npc_arc_turns(next);
    let lengths = g_arc_conversation_lengths(turns, next);
    list_add(conversation_lists, lengths);
  }
  let days = g_plant_days(conversation_lists, next);
  function shape_of(day) {
    let conversations = property_get(day, "conversations");
    let questions = property_get(day, "questions");
    let leader = property_get(day, "leader");
    let each = list_map_property(conversations, "turns");
    let met = list_size(conversations);
    let result = list_join_comma(each);
    let r = list_join_space([
      "leader",
      leader,
      "met",
      met,
      result,
      "questions",
      questions,
    ]);
    return r;
  }
  ("How many people a day held is TALLIED rather than averaged, because the spread is the thing wanted and a mean hides it. A day of one long conversation and a day of five short ones average to three and neither of them is three.");
  function met_of(day) {
    let conversations = property_get(day, "conversations");
    let leader = property_get(day, "leader");
    let came = greater_than(leader, 0);
    let extra = came ? 1 : 0;
    let r = add(list_size(conversations), extra);
    return r;
  }
  let met_each = list_map(days, met_of);
  let met_tally = list_tally(met_each);
  let shape = list_map(days, shape_of);
  let leader_each = list_map_property(days, "leader");
  let leader_turns = list_sum(leader_each);
  function came(turns) {
    let r = greater_than(turns, 0);
    return r;
  }
  let leader_days = list_filter_size(leader_each, came);
  let r = {
    npcs: s.plant_npcs_settle,
    days: list_size(days),
    leader_turns,
    leader_days,
    met_tally,
    shape,
  };
  return r;
}
