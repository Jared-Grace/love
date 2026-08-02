import { ceil } from "./ceil.mjs";
import { round } from "./round.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_plant_npcs } from "./g_plant_npcs.mjs";
import { g_plant_converts } from "./g_plant_converts.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_game_plants_whole(next, days_total) {
  "Every plant of a whole game, each one whole, together filling exactly the days of preaching there are.";
  "Plants are drawn at the size they mean to be until one of them would not fit in the days that are left. That one is not made at all - the days it would have taken are handed back to the plants that already exist, a day at a time round the whole game.";
  "Nothing here is a remainder, and that is the change. The leftover used to be given to whichever plant happened to be last, which made one plant of every game a runt or a stretched one for a reason nobody playing could see. Spreading it means every plant is the size it asked for and no single plant carries the arithmetic.";
  "Extra days are days the arcs did not need, so a plant that receives them holds the same people a little longer. That lowers the leader's SHARE of the days rather than the leader's turns, which is the harmless direction - a floor of half the days is a long way below where these land.";
  let s = g_generation_settings();
  let plants = [];
  let days_spent = 0;
  let npc_next = 0;
  let shortest = divide(days_total, s.plant_days_minimum);
  let most = ceil(shortest) + 1;
  for (let index = 0; less_than(index, most); index++) {
    let wanted = g_plant_npcs(index, next);
    let converts_count = subtract(wanted, 1);
    let drawn = g_plant_converts(next, converts_count, npc_next);
    let days = property_get(drawn, "days");
    let days_after = days_spent + days;
    let over = greater_than(days_after, days_total);
    if (over) {
      break;
    }
    npc_next = npc_next + converts_count;
    days_spent = days_after;
    let npcs = converts_count + 1;
    let plant = {
      index,
      npcs,
      wanted,
      days,
      leader_turns: property_get(drawn, "leader_turns"),
      convert_turns: property_get(drawn, "convert_turns"),
      arc_turns: property_get(drawn, "arc_turns"),
      converts: property_get(drawn, "converts"),
      days_drawn: days,
    };
    list_add(plants, plant);
  }
  let held = plants.length;
  let spare = subtract(days_total, days_spent);
  let any = greater_than(held, 0);
  if (any) {
    for (let step = 0; less_than(step, spare); step++) {
      let at = modulo(step, held);
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
  }
  return plants;
}
