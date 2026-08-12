import { g_plants_pool_hand_out } from "./g_plants_pool_hand_out.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_game_plant_passages } from "./g_game_plant_passages.mjs";
export async function g_game_plants(chapters, pool) {
  "One playthrough's plants - the chapters that player chose cut into runs of preaching, each holding as many of the written arcs as its preaching pays for.";
  "The two halves of the game meet HERE and they are made at different times. The chapters are the player's, chosen when the game begins, so a plant's length is worked out now. The arcs are authored long before, drawn as a pool with no plant anywhere in them. This walks the plants and hands the pool out.";
  "Which way round that goes was got wrong once and it is worth keeping why. Plants used to draw a head COUNT and take their length from the people in them, with the chapters laid alongside afterwards to see what they had covered. That is only sound if the chapters are known in advance - and they are not, because the player picks them. Sizing a plant by its cast and then discovering it spans eleven chapters is not pacing, it is a report of what happened.";
  ("A plant's turn budget comes from its LINES, through ",
    fn_name("g_passage_match_count"),
    " - how much preaching there is to hold conversations around. The question share comes off the top, because those turns are spent asking rather than on anybody's arc.");
  ("The leader is taken next, out of the plant's DAYS rather than out of what is left. An elder is formed over a set amount of time and the rest of the plant fits around that; a leader paid a share of the remainder would grow whenever the plant did and never let the room grow at all.");
  ("Converts are then taken from the pool IN ORDER until the rest of the budget is met, and never reused - a face met in the first plant cannot turn up again in the fourth. The last one is only taken if taking it lands nearer the budget than stopping would, so a plant does not overspend by most of an arc to avoid being a few turns short.");
  ("A plant that runs out of pool is UNFINISHED rather than failed. Both supplies are sized to each other so both run low together, and the last plant of a game is the remainder of each - counting that as a fault would report the end of the content as something the player did.");
  let s = g_generation_settings();
  let cut = await g_game_plant_passages(chapters);
  let held = pool.length;
  let cursor = 0;
  let plants = [];
  let index = -1;
  g_plants_pool_hand_out(cut, index, s, held, cursor, pool, plants);
  return plants;
}
