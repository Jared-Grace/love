import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_dev_routes_day_baptisms_collect } from "./app_g_dev_routes_day_baptisms_collect.mjs";
export function app_g_dev_routes_gospel_share(r, div_map) {
  arguments_assert(arguments, 2);
  let gratitude = property_get(r, "gratitude");
  let dove = property_get(r, "dove");
  let discern = property_get(r, "discern");
  let r2 = app_g_dev_routes_day_baptisms_collect(r, div_map);
  let day_baptisms_collect = property_get(r2, "day_baptisms_collect");
  let day_hours = property_get(r2, "day_hours");
  let day_parts = property_get(r2, "day_parts");
  let pray = property_get(r2, "pray");
  let study = property_get(r2, "study");
  let day_unbelievers = property_get(r2, "day_unbelievers");
  let unbeliever = property_get(r2, "unbeliever");
  let quick = property_get(r2, "quick");
  let gospel_share = property_get(r2, "gospel_share");
  let r3 = {
    gratitude,
    dove,
    discern,
    r2,
    day_baptisms_collect,
    day_hours,
    day_parts,
    pray,
    study,
    day_unbelievers,
    unbeliever,
    quick,
    gospel_share,
  };
  return r3;
}
