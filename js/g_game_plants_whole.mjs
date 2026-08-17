import { g_game_plants_whole_any } from "./g_game_plants_whole_any.mjs";
import { g_game_plants_whole_spare } from "./g_game_plants_whole_spare.mjs";
import { g_plant_matches } from "./g_plant_matches.mjs";
import { floor } from "./floor.mjs";
import { round } from "./round.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
export function g_game_plants_whole(next, days_total) {
  "Every plant of a whole game, each one whole, together filling exactly the days of preaching there are.";
  "Plants are drawn at the size they mean to be until one of them would not fit in the days that are left. That one is not made at all - the days it would have taken are handed back to the plants that already exist, a day at a time round the whole game.";
  "Nothing here is a remainder, and that is the change. The leftover used to be given to whichever plant happened to be last, which made one plant of every game a runt or a stretched one for a reason nobody playing could see. Spreading it means every plant is the size it asked for and no single plant carries the arithmetic.";
  "Extra days are days the arcs did not need, so a plant that receives them holds the same people a little longer. That lowers the leader's SHARE of the days rather than the leader's turns, which is the harmless direction - a floor of half the days is a long way below where these land.";
  "Shared out in PROPORTION to how long each plant already is, and the whole days go first with what is left over landing on the longest. A day each all round was tried and fell hardest on the small early plants, which have the fewest days to dilute: a nine-day plant taking two spare days dropped its leader from three days in four to three in five, while a twenty-three-day plant hardly noticed. Proportion means the plants with room take the days, which is where the room is.";
  let s = g_generation_settings();
  let r = g_game_plants_whole_spare(days_total, s, next);
  let r2 = g_game_plants_whole_any(r);
  let any = property_get(r2, "any");
  let held = property_get(r2, "held");
  let days_spent = property_get(r2, "days_spent");
  let plants = property_get(r2, "plants");
  let spare = property_get(r2, "spare");
  if (any) {
    let given = 0;
    for (let plant of plants) {
      let days = property_get(plant, "days_drawn");
      let part = multiply_divide(spare, days, days_spent);
      let whole = floor(part);
      plant.days = plant.days + whole;
      given = given + whole;
    }
    let residue = subtract(spare, given);
    for (let step = 0; less_than(step, residue); step++) {
      let along = modulo(step, held);
      let left = subtract(held, 1);
      let at = subtract(left, along);
      let plant = plants[at];
      plant.days = plant.days + 1;
    }
  }
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
