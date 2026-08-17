import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_design } from "./app_g_design.mjs";
export function app_g_dev_routes_design(r7) {
  arguments_assert(arguments, 1);
  let characters = property_get(r7, "characters");
  let disciple = property_get(r7, "disciple");
  let gratitude = property_get(r7, "gratitude");
  let dove = property_get(r7, "dove");
  let discern = property_get(r7, "discern");
  let day_baptisms_collect = property_get(r7, "day_baptisms_collect");
  let day_hours = property_get(r7, "day_hours");
  let day_parts = property_get(r7, "day_parts");
  let pray = property_get(r7, "pray");
  let study = property_get(r7, "study");
  let day_unbelievers = property_get(r7, "day_unbelievers");
  let unbeliever = property_get(r7, "unbeliever");
  let quick = property_get(r7, "quick");
  let gospel_share = property_get(r7, "gospel_share");
  let believe = property_get(r7, "believe");
  async function design() {
    ("the #design reader: every memory note about this game's design, gathered and shown as collapsible cards (",
      fn_name("app_g_design"),
      "). not a mechanic under test like its siblings — it is the DESIGN behind them, kept in the game so it can be read where the work happens");
    await app_g_view_set(null);
    await app_g_design();
  }
  let r = {
    characters,
    disciple,
    gratitude,
    dove,
    discern,
    day_baptisms_collect,
    day_hours,
    day_parts,
    pray,
    study,
    day_unbelievers,
    unbeliever,
    quick,
    gospel_share,
    believe,
    design,
  };
  return r;
}
