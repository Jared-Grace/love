import { ceil } from "./ceil.mjs";
import { math_min } from "./math_min.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_plant_npcs } from "./g_plant_npcs.mjs";
import { g_plant_converts } from "./g_plant_converts.mjs";
import { g_leader_turns } from "./g_leader_turns.mjs";
import { g_plant_days_turns } from "./g_plant_days_turns.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_game_plants_whole(next, days_total) {
  "Every plant of a whole game, drawn to fill exactly the days of preaching there are and no more.";
  "The days are the budget and the people are drawn against it, which is the way round that leaves no remainder. Drawing a pool first and then cutting plants out of it left whoever went last holding whatever was over - measured at two and four people, reported as plants because they were the right shape to be counted as one.";
  "A plant too small to be a plant is never MADE here. While fewer days remain than a plant needs, those days go to the plant already standing rather than starting a church that cannot finish - which is also what a person would do, staying where they are rather than founding something a fortnight before they leave.";
  "The last plant is however big the days left let it be, and it is the only one that comes out under the size it meant to be. Cutting its DAYS back instead was tried and put the leader in front of the player ninety-eight days in a hundred, because the arcs were all still there and had fewer days to happen in.";
  let s = g_generation_settings();
  let plants = [];
  let days_left = days_total;
  let npc_next = 0;
  let shortest = divide(days_total, s.plant_days_minimum);
  let most = ceil(shortest) + 1;
  for (let index = 0; less_than(index, most); index++) {
    let none = less_than(days_left, 1);
    if (none) {
      break;
    }
    let started = greater_than(plants.length, 0);
    let thin = less_than(days_left, s.plant_days_minimum);
    if (thin && started) {
      let plant_last = plants[subtract(plants.length, 1)];
      plant_last.days = plant_last.days + days_left;
      days_left = 0;
      break;
    }
    let wanted = g_plant_npcs(index, next);
    let converts_count = subtract(wanted, 1);
    let grown = g_plant_converts(next, converts_count, npc_next, days_left);
    let converts = property_get(grown, "converts");
    let convert_turns = property_get(grown, "convert_turns");
    let days = property_get(grown, "days");
    npc_next = npc_next + converts.length;
    let leader_turns = g_leader_turns(convert_turns);
    let arc_turns = leader_turns + convert_turns;
    days_left = subtract(days_left, days);
    let npcs = converts.length + 1;
    let plant = {
      index,
      npcs,
      wanted,
      days,
      leader_turns,
      convert_turns,
      arc_turns,
      converts,
    };
    list_add(plants, plant);
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
