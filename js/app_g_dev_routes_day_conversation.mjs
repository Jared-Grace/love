import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_day_conversation_demo } from "./app_g_day_conversation_demo.mjs";
export function app_g_dev_routes_day_conversation(r2) {
  arguments_assert(arguments, 1);
  let disciple = property_get(r2, "disciple");
  let gratitude = property_get(r2, "gratitude");
  let dove = property_get(r2, "dove");
  let discern = property_get(r2, "discern");
  let day_baptisms_collect = property_get(r2, "day_baptisms_collect");
  let day_hours = property_get(r2, "day_hours");
  let day_parts = property_get(r2, "day_parts");
  let pray = property_get(r2, "pray");
  let study = property_get(r2, "study");
  let day_unbelievers = property_get(r2, "day_unbelievers");
  let unbeliever = property_get(r2, "unbeliever");
  let quick = property_get(r2, "quick");
  let gospel_share = property_get(r2, "gospel_share");
  let believe = property_get(r2, "believe");
  async function day_conversation() {
    ("the #day_conversation demo (sibling of #day_unbelievers under the 'day' group): open a REAL unbeliever conversation as a ONE-slice day, so it spans the whole 6 AM sunrise → 7 PM dusk and the change is easy to SEE as you answer each turn (",
      fn_name("app_g_day_conversation_demo"),
      "). the real game runs many slices, so a conversation there only ages its OWN slice, not the whole day");
    await app_g_view_set(null);
    await app_g_day_conversation_demo();
  }
  let r = {
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
    day_conversation,
  };
  return r;
}
