import { app_g_dev_shown_is } from "./app_g_dev_shown_is.mjs";
import { not } from "./not.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { app_g_dev_links } from "./app_g_dev_links.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index } from "./app_g_dev_index.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_if(div_map) {
  ("dev-only: if the URL hash names a route in ",
    fn_name("app_g_dev_routes"),
    ", run it; #index shows the clickable directory of all routes; anything else (incl. no hash) is a no-op so normal play is untouched. div_map is threaded through so a route may draw on the map (e.g. #day_unbelievers markers). the one screen held back further still is #design, and it is held back in the registry itself (",
    fn_name("app_g_dev_routes"),
    " omits it off localhost), so off localhost it is neither listed by the directory nor reachable by typing its hash - a second, tighter gate inside the one below, for the one screen that is private notes rather than a mechanic under test.");
  ("nothing here runs at all off this network. The screens used to ship, on the reasoning that a phone has no localhost and so would otherwise have no way in; ",
    fn_name("app_g_dev_shown_is"),
    " asks the wider question instead - served from a machine on this same network - which a phone reaching this one by its network name answers yes to, so the way in a phone needed is kept and the deployed game stops carrying test screens for a reader who came to play.");
  let shown = app_g_dev_shown_is();
  if (not(shown)) {
    return;
  }
  let name = html_hash_name_get();
  let right = app_shared_g_dev_index_hash_name();
  if (equal(name, right)) {
    app_g_dev_index();
    return;
  }
  let routes = app_g_dev_routes(div_map);
  if (property_exists(routes, name)) {
    let route = property_get(routes, name);
    await route();
    app_g_dev_links();
  }
}
