import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { g_leader_turns } from "./g_leader_turns.mjs";
import { g_plant_days_turns } from "./g_plant_days_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_converts(next, converts_count, index_first, days_left) {
  "The converts of one plant, drawn one at a time until the plant is either as full as it meant to be or as long as the days left allow.";
  "Drawn AS the plant is built rather than picked out of a pool made earlier. That is the difference between generating the whole game at once and cutting a game out of stock: nobody is left over at the end, because nobody was made who was not asked for.";
  "Growing against the days left is what keeps the LAST plant honest. Drawing a full cast and then cutting the plant's days back to what remained left the leader in front of the player ninety-eight days in a hundred - the arcs were still there, so the same conversations had to happen in fewer days. Stopping before the person who would not fit means the plant is smaller and everybody in it is finished.";
  "The number is a running one across the whole game, so an npc's number says when in the game they are met and two plants can never name the same person.";
  let converts = [];
  let convert_turns = 0;
  let days = 0;
  for (let step = 0; less_than(step, converts_count); step++) {
    let turns = g_npc_arc_turns(next);
    let turns_tried = convert_turns + turns;
    let leader_tried = g_leader_turns(turns_tried);
    let arc_turns_tried = leader_tried + turns_tried;
    let days_tried = g_plant_days_turns(arc_turns_tried);
    let over = greater_than(days_tried, days_left);
    let some = greater_than(converts.length, 0);
    if (over && some) {
      break;
    }
    let index = index_first + step;
    let npc = {
      index,
      turns,
    };
    list_add(converts, npc);
    convert_turns = turns_tried;
    days = days_tried;
  }
  let r = {
    converts,
    convert_turns,
    days,
  };
  return r;
}
