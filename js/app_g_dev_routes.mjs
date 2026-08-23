import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_word_pictures } from "./app_g_word_pictures.mjs";
import { app_g_dev_routes_local } from "./app_g_dev_routes_local.mjs";
import { app_g_dev_routes_hru } from "./app_g_dev_routes_hru.mjs";
import { app_g_dev_routes_gospel_share } from "./app_g_dev_routes_gospel_share.mjs";
import { app_g_dev_routes_gratitude } from "./app_g_dev_routes_gratitude.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_dev_routes(div_map) {
  let r = app_g_dev_routes_gratitude(div_map);
  let r3 = app_g_dev_routes_gospel_share(r, div_map);
  let r4 = app_g_dev_routes_hru(r3);
  let hru = property_get(r4, "hru");
  let r2 = app_g_dev_routes_local(r4, hru, div_map);
  let local = property_get(r2, "local");
  let design = property_get(r2, "design");
  let routes = property_get(r2, "routes");
  ("#word_pictures is registered here rather than inside one of the chained groups above, because it belongs to none of them: it is a review sheet for content being settled, not a mechanic under test, and a group it was folded into would have to thread it through every group after that one for no reason");
  async function word_pictures() {
    await app_g_view_set(null);
    await app_g_word_pictures();
  }
  property_set(routes, "word_pictures", word_pictures);
  if (local) {
    ("#design is the ONE route that stays localhost-only, and it is held back HERE rather than at the dispatcher because this registry is what both the dispatcher and the #index directory read — gating it once means the card cannot be listed on a screen where tapping it would do nothing. every other route ships, so the dev screens are reachable on a phone against the deployed site, where there is no localhost to develop from. design is different in kind: it is the private design notes, not a mechanic under test");
    property_set(routes, "design", design);
  }
  return routes;
}
