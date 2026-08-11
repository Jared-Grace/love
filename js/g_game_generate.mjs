import { fn_name } from "./fn_name.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { g_game_chapters_chosen } from "./g_game_chapters_chosen.mjs";
import { g_game_plants } from "./g_game_plants.mjs";
import { g_game_plants_areas } from "./g_game_plants_areas.mjs";
export async function g_game_generate(word) {
  "A whole game: the chapters this player preaches, cut into plants, each holding the written people its preaching pays for and sitting on a rung of the escalation.";
  "Two layers made at DIFFERENT TIMES, and that is the whole shape. The arcs are authored once - drawn as a pool, sized against every sermon that exists, with no plant anywhere in them. The plants are cut when a game begins, out of the chapters this player chose and in the order they chose them. Nothing about a plant can be worked out in advance, because the chapters cannot.";
  "This was tried the other way twice and both failed the same way. Once the plants were AUTHORED against the chapters, one cast written per plant - which only works if every game preaches the same chapters in the same order, and they do not. Once the plants drew their own arcs at game time, which makes the arcs unauthorable: words written for a length that gets redrawn every game belong to nobody.";
  ("The pool is seeded on a fixed word, because it is authored content. What varies between games is the CHAPTERS - see ",
    fn_name("g_game_chapters_chosen"),
    " - so the same written people land in different rooms rather than becoming different people.");
  let turns_wanted = await g_npc_pool_convert_turns();
  let pool_next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, pool_next);
  let chapters = await g_game_chapters_chosen(word);
  let bare = await g_game_plants(chapters, pool);
  let r = g_game_plants_areas(bare);
  return r;
}
