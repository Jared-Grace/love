import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_day_baptisms_collect_start } from "./app_g_day_baptisms_collect_start.mjs";
export function app_g_dev_routes_day_baptisms_collect(r, div_map) {
  arguments_assert(arguments, 2);
  let disciple = property_get(r, "disciple");
  let believe = property_get(r, "believe");
  let hru = property_get(r, "hru");
  let gospel_share = property_get(r, "gospel_share");
  let quick = property_get(r, "quick");
  let unbeliever = property_get(r, "unbeliever");
  let day_unbelievers = property_get(r, "day_unbelievers");
  let r2 = property_get(r, "r2");
  let study = property_get(r, "study");
  let pray = property_get(r2, "pray");
  let day_parts = property_get(r2, "day_parts");
  let day_hours = property_get(r2, "day_hours");
  async function day_baptisms_collect() {
    ("the #day_baptisms_collect demo (sibling of #day_unbelievers under the 'day' group): the OTHER half of a day - the same three chosen people, but two of them have already believed today, so the player finishes the last conversation and then GATHERS the day's believers and walks them to the water (",
      fn_name("app_g_day_baptisms_collect_start"),
      "). converts are baptized the same day, so who may be collected is exactly who believed today - nothing is stored to say so");
    await app_g_view_set(null);
    await app_g_day_baptisms_collect_start(div_map);
  }
  let r3 = {
    disciple,
    believe,
    hru,
    gospel_share,
    quick,
    unbeliever,
    day_unbelievers,
    study,
    pray,
    day_parts,
    day_hours,
    day_baptisms_collect,
  };
  return r3;
}
