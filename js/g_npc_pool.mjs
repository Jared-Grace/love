import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { list_add } from "./list_add.mjs";
export function g_npc_pool(turns_wanted, next) {
  "Every npc the game has, each with the turns their arc is worth - drawn once and then fixed.";
  "The pool exists before any plant does, which is the whole inversion. Plants used to decide how many people they held and how long each arc was; now the people are written first and a plant is a handful of them picked up. That is what lets the grouping change every game without a word of anybody's arc being rewritten.";
  "Drawn until the TURNS are covered rather than until a head count is reached. How many people that comes to is whatever it comes to, which is the only way of hitting the total exactly when the arcs are drawn from a lopsided spread - an arc reaching ninety above its middle and twelve below averages well over its middle and a count worked out from the middle buys too many.";
  "Seeded by whoever calls this, and it must be seeded on something that never moves - the arcs here are authored content, so a run that drew differently would leave written words attached to a length nobody has any more.";
  let s = g_generation_settings();
  let ceiling = divide(turns_wanted, s.arc_turns_low);
  let most = Math.ceil(ceiling);
  let pool = [];
  let spent = 0;
  for (let index = 0; less_than(index, most); index++) {
    let enough = greater_than_equal(spent, turns_wanted);
    if (enough) {
      break;
    }
    let turns = g_npc_arc_turns(next);
    let npc = {
      index,
      turns,
    };
    list_add(pool, npc);
    spent = spent + turns;
  }
  return pool;
}
