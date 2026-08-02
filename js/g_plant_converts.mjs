import { less_than } from "./less_than.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_converts(next, converts_count, index_first) {
  "The converts of one plant, each with the turns their arc is worth, numbered on from wherever the last plant stopped.";
  "Drawn AS the plant is built rather than picked out of a pool made earlier. That is the difference between generating the whole game at once and cutting a game out of stock: nobody is left over at the end, because nobody was made who was not asked for.";
  "The number is a running one across the whole game, so an npc's number says when in the game they are met and two plants can never name the same person.";
  let converts = [];
  for (let step = 0; less_than(step, converts_count); step++) {
    let turns = g_npc_arc_turns(next);
    let index = index_first + step;
    let npc = {
      index,
      turns,
    };
    list_add(converts, npc);
  }
  return converts;
}
