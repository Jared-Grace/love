import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_characters } from "./app_g_characters.mjs";
export function app_g_dev_routes_characters(r6) {
  arguments_assert(arguments, 1);
  let believe = property_get(r6, "believe");
  let gospel_share = property_get(r6, "gospel_share");
  let quick = property_get(r6, "quick");
  let unbeliever = property_get(r6, "unbeliever");
  let day_unbelievers = property_get(r6, "day_unbelievers");
  let study = property_get(r6, "study");
  let pray = property_get(r6, "pray");
  let day_parts = property_get(r6, "day_parts");
  let day_hours = property_get(r6, "day_hours");
  let day_baptisms_collect = property_get(r6, "day_baptisms_collect");
  let discern = property_get(r6, "discern");
  let dove = property_get(r6, "dove");
  let gratitude = property_get(r6, "gratitude");
  let disciple = property_get(r6, "disciple");
  async function characters() {
    ("the #characters contact sheet: every character sprite the game owns, each turning once all the way round (",
      fn_name("app_g_characters"),
      "). a sibling of #design in kind - it shows you what the game is MADE of rather than putting a mechanic under test - and it ships, because a rotation that came out wrong is a thing to check against the deployed art on a phone");
    await app_g_view_set(null);
    app_g_characters();
  }
  return {
    believe,
    gospel_share,
    quick,
    unbeliever,
    day_unbelievers,
    study,
    pray,
    day_parts,
    day_hours,
    day_baptisms_collect,
    discern,
    dove,
    gratitude,
    disciple,
    characters,
  };
}
