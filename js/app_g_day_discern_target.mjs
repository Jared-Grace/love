import { app_g_day_discern_pool } from "./app_g_day_discern_pool.mjs";
import { app_g_day_water_choose } from "./app_g_day_water_choose.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_day_discern_target(g, player) {
  "what the day's discernment prayer names next - a PERSON while anybody is left to reach or left to gather, and the WATER once every believer of the day is already walking behind the player";
  "the two are asked in one place because the prayer is one prayer. the player prays the same words all day and is led to whatever is next; that the last thing is a place rather than a person is the day ending, not a second kind of praying";
  let pool = app_g_day_discern_pool();
  let anybody = list_empty_not_is(pool);
  if (anybody) {
    let person = list_random_item(pool);
    return person;
  }
  let water = app_g_day_water_choose(g, player);
  return water;
}
