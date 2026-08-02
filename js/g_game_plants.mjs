import { math_min } from "./math_min.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { g_plant_npcs } from "./g_plant_npcs.mjs";
import { g_leader_turns } from "./g_leader_turns.mjs";
import { g_plant_days_turns } from "./g_plant_days_turns.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_game_plants(next, pool) {
  "One playthrough's plants - how many people each holds, which npcs those are and how many days it therefore lasts.";
  "This runs per SAVE rather than once for everybody, which is the point of doing it this way round. The npcs are fixed and shared; the grouping is the player's own, so a first plant is small in every game and a second player meets the same people in a different room.";
  "The pool is walked in order and never reused, so a face met in the first plant cannot turn up again in the fourth. Whoever calls this shuffles the pool if they want the ORDER to differ between games as well as the grouping.";
  "The last plant takes whatever is left and is reported short rather than padded. The sermon runs out where it runs out and a plant quietly topped up from nowhere would hide that.";
  let s = g_generation_settings();
  let plants = [];
  let cursor = 0;
  let held = pool.length;
  for (let index = 0; less_than(index, held); index++) {
    let spare = subtract(held, cursor);
    let none = less_than(spare, 1);
    if (none) {
      break;
    }
    let wanted = g_plant_npcs(index, next);
    let asked = subtract(wanted, 1);
    let converts_count = math_min(asked, spare);
    let convert_turns = 0;
    let converts = [];
    for (let step = 0; less_than(step, converts_count); step++) {
      let npc = pool[cursor];
      list_add(converts, npc);
      let turns = property_get(npc, "turns");
      convert_turns = convert_turns + turns;
      cursor = cursor + 1;
    }
    let leader_turns = g_leader_turns(convert_turns);
    let arc_turns = leader_turns + convert_turns;
    let days = g_plant_days_turns(arc_turns);
    let conversations = divide(leader_turns, s.conversation_turns_mean);
    let reached = multiply_divide(conversations, 100, days);
    let leader_days_percent = round(reached);
    let leader_short = less_than(leader_turns, s.leader_turns_minimum);
    let npcs = converts_count + 1;
    let plant = {
      index,
      npcs,
      wanted,
      days,
      leader_turns,
      convert_turns,
      arc_turns,
      leader_days_percent,
      leader_short,
      converts,
    };
    list_add(plants, plant);
  }
  return plants;
}
