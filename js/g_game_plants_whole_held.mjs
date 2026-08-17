import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { ceil } from "./ceil.mjs";
import { less_than } from "./less_than.mjs";
import { g_plant_npcs } from "./g_plant_npcs.mjs";
import { subtract } from "./subtract.mjs";
import { g_npc_arc_turns_multiple } from "./g_npc_arc_turns_multiple.mjs";
import { g_plant_converts } from "./g_plant_converts.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function g_game_plants_whole_held(days_total, s, next) {
  arguments_assert(arguments, 3);
  let plants = [];
  let days_spent = 0;
  let npc_next = 0;
  let shortest = divide(days_total, s.plant_days_minimum);
  let most = ceil(shortest) + 1;
  for (let index = 0; less_than(index, most); index++) {
    let wanted = g_plant_npcs(index, next);
    let converts_count = subtract(wanted, 1);
    let turns_all = g_npc_arc_turns_multiple(next, converts_count);
    let drawn = g_plant_converts(turns_all, npc_next);
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
  let r = {
    plants,
    days_spent,
    held,
  };
  return r;
}
