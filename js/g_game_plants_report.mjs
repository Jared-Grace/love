import { g_sermon_days_total } from "./g_sermon_days_total.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { g_game_plants } from "./g_game_plants.mjs";
import { random_seed_from_text } from "./random_seed_from_text.mjs";
import { random_seed_generator } from "./random_seed_generator.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function g_game_plants_report(word) {
  "What one playthrough's plants come out as - a row for each and a tally of how often each size turns up.";
  "The tally is the point. Whether the big rooms are rare is a claim about a distribution and it cannot be read off a setting - a bell reaching sixteen was widened once on the reasonable-sounding grounds that sixteen should be possible and put over half the settled plants at fourteen or above. Counting them is the only way anybody finds that out.";
  "The pool is seeded on a fixed word and the game on whatever word is handed in, which is the two layers kept apart: change the word and the same people group differently.";
  let sermon_days = await g_sermon_days_total();
  let turns_wanted = await g_npc_pool_convert_turns();
  let pool_seed = random_seed_from_text(g_npc_pool.name);
  let pool_next = random_seed_generator(pool_seed);
  let pool = g_npc_pool(turns_wanted, pool_next);
  let game_seed = random_seed_from_text(word);
  let next = random_seed_generator(game_seed);
  let bare = g_game_plants(next, pool);
  let stream = await g_sermon_chapter_days_all();
  let plants = g_game_plants_areas(bare, stream);
  let rows = [];
  let sizes = {};
  let days_total = 0;
  let short_plants = 0;
  let elder_short_plants = 0;
  for (let plant of plants) {
    let npcs = property_get(plant, "npcs");
    let days = property_get(plant, "days");
    days_total = days_total + days;
    let seen = sizes[npcs];
    let already = seen ? seen : 0;
    sizes[npcs] = already + 1;
    let short_is = property_get(plant, "leader_short");
    if (short_is) {
      short_plants = short_plants + 1;
    }
    let elder_short_is = property_get(plant, "elder_short");
    if (elder_short_is) {
      elder_short_plants = elder_short_plants + 1;
    }
    let row = {
      index: property_get(plant, "index"),
      npcs,
      days,
      leader_turns: property_get(plant, "leader_turns"),
      leader_days_percent: property_get(plant, "leader_days_percent"),
      leader_short: short_is,
      area: property_get(plant, "area"),
      book: property_get(plant, "book"),
      chapters: property_get(plant, "chapters"),
      sender_present: property_get(plant, "sender_present"),
      elder_short: elder_short_is,
      days_short: property_get(plant, "days_short"),
    };
    list_add(rows, row);
  }
  let r = {
    sermon_days,
    turns_wanted,
    pool: pool.length,
    plants: plants.length,
    days_total,
    sizes,
    short_plants,
    elder_short_plants,
    rows,
  };
  return r;
}
