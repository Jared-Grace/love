import { html_hash_get } from "./html_hash_get.mjs";
import { text_skip } from "./text_skip.mjs";
import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { app_g_dev_index } from "./app_g_dev_index.mjs";
import { app_g_dev_back_link } from "./app_g_dev_back_link.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_if() {
  "dev-only: if the URL hash names a route in app_g_dev_routes, run it; #index shows the clickable directory of all routes; anything else (incl. no hash) is a no-op so normal play is untouched";
  let name = text_skip(html_hash_get(), 1);
  localStorage.setItem("dbg_devif", name);
  if (name === "index") {
    app_g_dev_index();
    return;
  }
  let routes = app_g_dev_routes();
  if (property_exists(routes, name)) {
    let route = property_get(routes, name);
    await route();
    app_g_dev_back_link();
  }
}
