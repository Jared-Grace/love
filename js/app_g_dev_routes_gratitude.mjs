import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_dev_routes_day_hours } from "./app_g_dev_routes_day_hours.mjs";
import { app_g_dev_routes_day_unbelievers } from "./app_g_dev_routes_day_unbelievers.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_routes_gratitude(div_map) {
  arguments_assert(arguments, 1);
  ("registry of dev-only hash routes for ",
    fn_name("app_g"),
    " (open g.html#<name>): each value sets up that test screen. SINGLE SOURCE OF TRUTH — ",
    fn_name("app_g_dev_if"),
    " dispatches from it and ",
    fn_name("app_g_dev_index"),
    " lists its keys, so the #index directory can never drift from the real routes");
  async function study() {
    let view = {
      kind: app_g_view_kind_study(),
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds",
      word_index: 0,
    };
    await app_g_view_set(view);
  }
  let r = app_g_dev_routes_day_hours();
  let r2 = app_g_dev_routes_day_unbelievers(r, div_map);
  let day_unbelievers = property_get(r2, "day_unbelievers");
  let unbeliever = property_get(r2, "unbeliever");
  let quick = property_get(r2, "quick");
  let gospel_share = property_get(r2, "gospel_share");
  let hru = property_get(r2, "hru");
  let believe = property_get(r2, "believe");
  let disciple = property_get(r2, "disciple");
  let discern = property_get(r2, "discern");
  let dove = property_get(r2, "dove");
  let gratitude = property_get(r2, "gratitude");
  let r3 = {
    study,
    r2,
    day_unbelievers,
    unbeliever,
    quick,
    gospel_share,
    hru,
    believe,
    disciple,
    discern,
    dove,
    gratitude,
  };
  return r3;
}
