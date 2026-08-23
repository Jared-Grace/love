import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_routes_collect(r, day_conversation, hru) {
  arguments_assert(arguments, 3);
  let believe = property_get(r, "believe");
  let gospel_share = property_get(r, "gospel_share");
  let quick = property_get(r, "quick");
  let unbeliever = property_get(r, "unbeliever");
  let day_unbelievers = property_get(r, "day_unbelievers");
  let study = property_get(r, "study");
  let pray = property_get(r, "pray");
  let day_parts = property_get(r, "day_parts");
  let day_hours = property_get(r, "day_hours");
  let day_baptisms_collect = property_get(r, "day_baptisms_collect");
  let discern = property_get(r, "discern");
  let dove = property_get(r, "dove");
  let gratitude = property_get(r, "gratitude");
  let disciple = property_get(r, "disciple");
  let characters = property_get(r, "characters");
  let routes = {
    study,
    unbeliever,
    quick,
    day_unbelievers,
    day_baptisms_collect,
    day_conversation,
    day_parts,
    day_hours,
    gospel_share,
    hru,
    believe,
    disciple,
    discern,
    dove,
    gratitude,
    pray,
    characters,
  };
  return routes;
}
