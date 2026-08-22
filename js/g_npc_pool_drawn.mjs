import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
export async function g_npc_pool_drawn() {
  "The pool as the game actually draws it - sized against every sermon written and seeded on the one fixed word - handed back without anything being written down.";
  "THE SEEDING IS THE PART WORTH HAVING IN ONE PLACE. The pool is authored content's foundation: a person's turn count is fixed by this draw, and arcs are written against that number. A second caller seeding on a different word, or sizing against a different total, would hand back a pool that looks like this one and gives different people different lengths - and the arcs attached to the first pool would then be wrong with nothing saying so.";
  "Separated from the writing because reading the pool and filing the pool are different things. A gate asking questions about who the pool holds must not write two hundred files to find out.";
  let turns_wanted = await g_npc_pool_convert_turns();
  let next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, next);
  return pool;
}
