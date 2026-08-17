import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_routes_hru(r3) {
  arguments_assert(arguments, 1);
  let gospel_share = property_get(r3, "gospel_share");
  let quick = property_get(r3, "quick");
  let unbeliever = property_get(r3, "unbeliever");
  let day_unbelievers = property_get(r3, "day_unbelievers");
  let study = property_get(r3, "study");
  let pray = property_get(r3, "pray");
  let day_parts = property_get(r3, "day_parts");
  let day_hours = property_get(r3, "day_hours");
  let day_baptisms_collect = property_get(r3, "day_baptisms_collect");
  let r2 = property_get(r3, "r2");
  let discern = property_get(r3, "discern");
  let dove = property_get(r3, "dove");
  let gratitude = property_get(r3, "gratitude");
  let hru = property_get(r2, "hru");
  let r = {
    gospel_share,
    quick,
    unbeliever,
    day_unbelievers,
    study,
    pray,
    day_parts,
    day_hours,
    day_baptisms_collect,
    r2,
    discern,
    dove,
    gratitude,
    hru,
  };
  return r;
}
