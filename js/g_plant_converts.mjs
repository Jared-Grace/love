import { less_than } from "./less_than.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { g_leader_turns } from "./g_leader_turns.mjs";
import { g_plant_days_turns } from "./g_plant_days_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_converts(next, converts_count, index_first) {
  "The converts of one plant, with what their arcs come to and the days the plant therefore needs.";
  "Drawn AS the plant is built rather than picked out of a pool made earlier. That is the difference between generating the whole game at once and cutting a game out of stock: nobody is left over at the end, because nobody was made who was not asked for.";
  "Nothing here knows how many days are left, and that is deliberate. A plant that grew only as far as the remaining days allowed came out under the size it meant to be, which made the last one of every game a runt for a reason no player could see. What is left over is the whole game's business, not this plant's.";
  "The number is a running one across the whole game, so an npc's number says when in the game they are met and two plants can never name the same person.";
  let converts = [];
  let convert_turns = 0;
  for (let step = 0; less_than(step, converts_count); step++) {
    let turns = g_npc_arc_turns(next);
    let index = index_first + step;
    let npc = {
      index,
      turns,
    };
    list_add(converts, npc);
    convert_turns = convert_turns + turns;
  }
  let leader_turns = g_leader_turns(convert_turns);
  let arc_turns = leader_turns + convert_turns;
  let days = g_plant_days_turns(arc_turns);
  let r = {
    converts,
    convert_turns,
    leader_turns,
    arc_turns,
    days,
  };
  return r;
}
