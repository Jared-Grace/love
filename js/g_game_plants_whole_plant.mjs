import { arguments_assert } from "./arguments_assert.mjs";
import { g_game_plants_whole_any } from "./g_game_plants_whole_any.mjs";
import { g_game_plants_whole_given } from "./g_game_plants_whole_given.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { round } from "./round.mjs";
import { less_than } from "./less_than.mjs";
import { g_plant_matches } from "./g_plant_matches.mjs";
export function g_game_plants_whole_plant(r, s) {
  arguments_assert(arguments, 2);
  let r2 = g_game_plants_whole_any(r);
  let plants = g_game_plants_whole_given(r2);
  for (let plant of plants) {
    let leader_turns = property_get(plant, "leader_turns");
    let days = property_get(plant, "days");
    let conversations = divide(leader_turns, s.conversation_turns_mean);
    let reached = multiply_divide(conversations, 100, days);
    plant.leader_days_percent = round(reached);
    plant.leader_short = less_than(leader_turns, s.leader_turns_minimum);
    let arc_turns = property_get(plant, "arc_turns");
    let split = g_plant_matches(days, arc_turns);
    plant.matches = property_get(split, "matches");
    plant.question_matches = property_get(split, "question_matches");
    plant.question_percent = property_get(split, "question_percent");
  }
  return plants;
}
