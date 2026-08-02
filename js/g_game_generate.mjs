import { g_sermon_chapter_days_all } from "./g_sermon_chapter_days_all.mjs";
import { g_game_plants_whole } from "./g_game_plants_whole.mjs";
import { g_game_plants_areas } from "./g_game_plants_areas.mjs";
import { random_seed_from_text } from "./random_seed_from_text.mjs";
import { random_seed_generator } from "./random_seed_generator.mjs";
import { property_get } from "./property_get.mjs";
export async function g_game_generate(word) {
  "A whole game: every plant, everybody in it, how long each lasts and which chapters it preaches through - from one seed and the sermon supply.";
  "One pass rather than two. There used to be a pool of npcs made first and a grouping made per save, which existed so a first plant could be small in every game; the size is a ramp on the plant number now, so it already is, and the second layer was buying nothing but a remainder nobody could place.";
  "The days of preaching are the one fixed quantity - everything here is drawn to fill them exactly. Change the seed and the same amount of game comes out grouped differently.";
  let stream = await g_sermon_chapter_days_all();
  let days_total = 0;
  for (let entry of stream) {
    let days = property_get(entry, "days");
    days_total = days_total + days;
  }
  let seed = random_seed_from_text(word);
  let next = random_seed_generator(seed);
  let bare = g_game_plants_whole(next, days_total);
  let r = g_game_plants_areas(bare, stream);
  return r;
}
