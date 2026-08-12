import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_generation_plan } from "./g_generation_plan.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_conversation_lengths } from "./g_arc_conversation_lengths.mjs";
import { list_map } from "./list_map.mjs";
import { g_plant_days } from "./g_plant_days.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function g_plant_days_report(seed) {
  "One plant scheduled end to end, reported as the shape of its days - how many people it took, how many days they came to, and what each day held. The one to run to see whether a plant's pacing is any good.";
  "It draws a whole cast rather than taking one, because the question being asked is about the SETTINGS and not about any particular people. Change a number in the settings, run this, and the days change under you.";
  "Seeded off a word so the same word gives the same plant back. Two words give two plants out of the same settings, which is the variety this is here to look at.";
  let next = random_seed_generator_from_text(seed);
  let plan = g_generation_plan();
  let pool = g_npc_pool(plan.arc_matches, next);
  function lengths_of(npc) {
    let turns = property_get(npc, "turns");
    let lengths = g_arc_conversation_lengths(turns, next);
    return lengths;
  }
  let conversation_lists = list_map(pool, lengths_of);
  let days = g_plant_days(conversation_lists, next);
  function shape_of(day) {
    let conversations = property_get(day, "conversations");
    let questions = property_get(day, "questions");
    let met = list_size(conversations);
    let each = list_map_property(conversations, "turns");
    let turns = list_join_comma(each);
    let r = list_join_space([met, "met", turns, "questions", questions]);
    return r;
  }
  let shape = list_map(days, shape_of);
  let r = {
    npcs: list_size(pool),
    days: list_size(days),
    shape,
  };
  return r;
}
