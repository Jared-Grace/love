import { less_than } from "./less_than.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_npc_pool(count, next) {
  "Every npc the game has, each with the turns their arc is worth - drawn once and then fixed.";
  "The pool exists before any plant does, which is the whole inversion. Plants used to decide how many people they held and how long each arc was; now the people are written first and a plant is a handful of them picked up. That is what lets the grouping change every game without a word of anybody's arc being rewritten.";
  "Seeded by whoever calls this, and it must be seeded on something that never moves - the arcs here are authored content, so a run that drew differently would leave written words attached to a length nobody has any more.";
  let pool = [];
  for (let index = 0; less_than(index, count); index++) {
    let turns = g_npc_arc_turns(next);
    let npc = {
      index,
      turns,
    };
    list_add(pool, npc);
  }
  return pool;
}
