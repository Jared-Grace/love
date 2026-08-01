import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { text_skip } from "./text_skip.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index } from "./app_g_dev_index.mjs";
import { app_g_dev_back_link } from "./app_g_dev_back_link.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_if(div_map) {
  ("dev-only: if the URL hash names a route in ",
    fn_name("app_g_dev_routes"),
    ", run it; #index shows the clickable directory of all routes; anything else (incl. no hash) is a no-op so normal play is untouched. div_map is threaded through so a route may draw on the map (e.g. #day_unbelievers markers). the dev screens run on the DEPLOYED site too, not only on localhost, because a phone has no localhost to develop from and the Dev Tools button in the player menu is the only way in there. the one screen held back is #design, and it is held back in the registry itself (",
    fn_name("app_g_dev_routes"),
    " omits it off localhost), so off localhost it is neither listed by the directory nor reachable by typing its hash.");
  let s = html_hash_get();
  let name = text_skip(s, 1);
  if (equal(name, "index")) {
    app_g_dev_index();
    return;
  }
  let routes = app_g_dev_routes(div_map);
  if (property_exists(routes, name)) {
    let route = property_get(routes, name);
    await route();
    app_g_dev_back_link();
  }
}
