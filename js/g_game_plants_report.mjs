import { g_game_chapters_chosen } from "./g_game_chapters_chosen.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { g_game_plants_areas } from "./g_game_plants_areas.mjs";
import { g_sermon_days_total } from "./g_sermon_days_total.mjs";
import { g_npc_pool_convert_turns } from "./g_npc_pool_convert_turns.mjs";
import { g_npc_pool } from "./g_npc_pool.mjs";
import { g_game_plants } from "./g_game_plants.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function g_game_plants_report(word) {
  "What one playthrough's plants come out as - a row for each and a tally of how often each size turns up.";
  "The tally is the point. Whether the big rooms are rare is a claim about a distribution and it cannot be read off a setting - a bell reaching sixteen was widened once on the reasonable-sounding grounds that sixteen should be possible and put over half the settled plants at fourteen or above. Counting them is the only way anybody finds that out.";
  "The pool is seeded on a fixed word, because the arcs are authored. What varies between games is not the people but the CHAPTERS - the word handed in stands in for a player's choice until there is a screen to make it on, and picking a different run of chapters is what makes the same written people land in different rooms.";
  let sermon_days = await g_sermon_days_total();
  let turns_wanted = await g_npc_pool_convert_turns();
  let pool_next = random_seed_generator_from_text(g_npc_pool.name);
  let pool = g_npc_pool(turns_wanted, pool_next);
  let chapters = await g_game_chapters_chosen(word);
  let bare = await g_game_plants(chapters, pool);
  let plants = g_game_plants_areas(bare);
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
      start: property_get(plant, "start"),
      end: property_get(plant, "end"),
      lines: property_get(plant, "lines"),
      arc_turns: property_get(plant, "arc_turns"),
      spent: property_get(plant, "spent"),
      over_budget: property_get(plant, "over_budget"),
      sender_present: property_get(plant, "sender_present"),
      elder_short: elder_short_is,
      floor_met: property_get(plant, "floor_met"),
      over_maximum: property_get(plant, "over_maximum"),
      unfinished: property_get(plant, "unfinished"),
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
