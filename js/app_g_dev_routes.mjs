import { app_g_dev_routes_clearing } from "./app_g_dev_routes_clearing.mjs";
import { app_g_dev_routes_hru } from "./app_g_dev_routes_hru.mjs";
import { app_g_dev_routes_gospel_share } from "./app_g_dev_routes_gospel_share.mjs";
import { app_g_dev_routes_gratitude } from "./app_g_dev_routes_gratitude.mjs";
import { property_get } from "./property_get.mjs";
import { object_assign } from "./object_assign.mjs";
import { localhost_is } from "./localhost_is.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_dev_routes(div_map) {
  let r = app_g_dev_routes_gratitude(div_map);
  let r3 = app_g_dev_routes_gospel_share(r, div_map);
  let r4 = app_g_dev_routes_hru(r3);
  let hru = property_get(r4, "hru");
  let r2 = app_g_dev_routes_clearing(r4, hru, div_map);
  let clearing = property_get(r2, "clearing");
  let routes = property_get(r2, "routes");
  let design = property_get(r2, "design");
  object_assign(routes, clearing);
  let local = localhost_is();
  if (local) {
    ("#design is the ONE route that stays localhost-only, and it is held back HERE rather than at the dispatcher because this registry is what both the dispatcher and the #index directory read — gating it once means the card cannot be listed on a screen where tapping it would do nothing. every other route ships, so the dev screens are reachable on a phone against the deployed site, where there is no localhost to develop from. design is different in kind: it is the private design notes, not a mechanic under test");
    property_set(routes, "design", design);
  }
  return routes;
}
