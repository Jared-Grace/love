import { fn_name } from "./fn_name.mjs";
import { app_g_day_discern_pool } from "./app_g_day_discern_pool.mjs";
import { app_g_day_water_choose } from "./app_g_day_water_choose.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_day_discern_target(g, player) {
  "what the day's discernment prayer names next - a PERSON while anybody is still to be reached, and the WATER once they have all believed";
  "the two are asked in one place because the prayer is one prayer. the player prays the same words all day and is led to whatever is next; that the last thing is a place rather than a person is the day ending, not a second kind of praying";
  ("gathering the believers in between is not one of the answers, and is not prayed for at all - so this is only ever asked at a moment when there IS something to name. whether that moment has come is asked before the prayer is offered, next door in ",
    fn_name("app_g_day_discern_wanted_is"));
  let pool = app_g_day_discern_pool();
  let anybody = list_empty_not_is(pool);
  if (anybody) {
    let person = list_random_item(pool);
    return person;
  }
  let water = app_g_day_water_choose(g, player);
  return water;
}
